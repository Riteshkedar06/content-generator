import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5001;

app.use(cors()); // Enable CORS
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { targetAudience, contentType, context } = req.body;
  try {
    const response = await axios.post(`${process.env.API_URL}/generate`, {
      targetAudience,
      contentType,
      context,
    });
    res.send({ content: response.data.content });
  } catch (error) {
    res.status(500).send({ error: "Error generating content" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
