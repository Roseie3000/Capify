import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENAI_API_KEY;

app.post("/generate", async (req, res) => {
  const { topic } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Generate 15 unique, creative, non-repeating social media captions about: ${topic}`
          }
        ]
      })
    });

    const data = await response.json();

    const text = data.choices[0].message.content;

    // Split captions into lines
    const captions = text.split("\n").filter(line => line.trim() !== "");

    res.json({ captions });

  } catch (error) {
    console.log(error);
    res.status(500).send("Error generating captions");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
