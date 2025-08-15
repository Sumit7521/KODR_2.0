import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// API route for chatting with Ollama
app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemma3:1b', // must match exactly the pulled model name
        prompt,
        stream: false // disable streaming for now
      })
    });

    const data = await ollamaRes.json();

    // Return only the text output to frontend
    res.json({ response: data.response });
  } catch (err) {
    console.error('Ollama API error:', err);
    res.status(500).json({ error: 'Failed to generate response from Ollama' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
