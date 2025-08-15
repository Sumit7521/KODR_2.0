import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const chatEndRef = useRef(null);

  // Load chat history
  useEffect(() => {
    const savedChats = localStorage.getItem('ollama_chats');
    if (savedChats) {
      setMessages(JSON.parse(savedChats));
    }
  }, []);

  // Save chat history
  useEffect(() => {
    localStorage.setItem('ollama_chats', JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', text: prompt }];
    setMessages(newMessages);

    // Add "loading" placeholder
    const loadingMsgIndex = newMessages.length;
    setMessages(prev => [...prev, { role: 'assistant', text: 'Loading response...' }]);
    setLoadingIndex(loadingMsgIndex);
    setPrompt('');

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();

      // Replace "loading" with formatted response
      setMessages(prev => {
        const updated = [...prev];
        updated[loadingMsgIndex] = {
          role: 'assistant',
          text: data.response || JSON.stringify(data)
        };
        return updated;
      });
    } catch (err) {
      setMessages(prev => {
        const updated = [...prev];
        updated[loadingMsgIndex] = {
          role: 'assistant',
          text: '❌ Error: Could not reach AI'
        };
        return updated;
      });
    } finally {
      setLoadingIndex(null);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white shadow p-4 text-center font-semibold text-lg">
        💬 Ollama AI Chat
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] text-sm whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.role === 'assistant' ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </main>

      <div className="bg-white p-4 border-t flex gap-2">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          rows="1"
        />
        <button
          onClick={sendPrompt}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
