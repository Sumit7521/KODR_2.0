require('dotenv').config();
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai")
const { ChatMistralAI } = require("@langchain/mistralai")
const { PromptTemplate } = require("@langchain/core/prompts")
const { RunnableLambda } = require("@langchain/core/runnables")
const { AIMessage, HumanMessage, SystemMessage, ToolMessage } = require("@langchain/core/messages")
const { StateGraph, MessagesAnnotation } = require("@langchain/langgraph")
const { tool } = require("@langchain/core/tools")
const { z } = require("zod")
const { tavily } = require("@tavily/core");


const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 0.7,
    apiKey: process.env.GEMINI_API_KEY,
});

// const model = new ChatMistralAI({
//     model: "mistral-large-latest",
//     temperature: 0.7,
//     apiKey: process.env.MISTRAL_API_KEY,
// });


const searchTool = tool(
    async ({ query = "" }) => {
        console.log("Searching for:", query)
        const result = await tvly.search(query)
        return JSON.stringify(result.results)
    }, {
    name: "searchTool",
    description: "Useful when you need to search the web to find information about topics.",
    schema: z.object({
        query: z.string().describe("search query")
    })
})


const graph = new StateGraph(MessagesAnnotation)
    .addNode("LLM", async (state) => {
        const modelsWithBindTools = model.bindTools([ searchTool ])

        const response = await modelsWithBindTools.invoke(state.messages)

        state.messages.push(response)

        return {
            messages: state.messages
        }
    })
    .addNode("TOOLS", async (state) => {
        const lastMessage = state.messages[ state.messages.length - 1 ]

        const toolCall = lastMessage.tool_calls?.[ 0 ]

        const result = await searchTool.invoke(toolCall?.args ?? {})

        const toolMessage = new ToolMessage({
            name: toolCall?.name,
            content: result,
        })

        state.messages.push(toolMessage)

        return {
            messages: state.messages
        }

    })
    .addEdge("__start__", "LLM")
    .addEdge("TOOLS", "LLM")
    .addConditionalEdges("LLM", async (state) => {
        const lastMessage = state.messages[ state.messages.length - 1 ]
        if (lastMessage.tool_calls?.length) {
            return [ "TOOLS" ]
        } else {
            return [ "__end__" ]
        }
    })


const agent = graph.compile()


agent.invoke({
    messages: [
        new HumanMessage("Who is the president of the United States?"),
    ]
})
    .then(response => {
        console.log("Final response:", response)
    })
    .catch(err => {
        console.error("Error:", err)
    })
