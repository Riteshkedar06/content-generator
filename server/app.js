import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 5001;

app.use(cors()); // Enable CORSs
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { targetAudience, contentType, context } = req.body;
  try {
    const response = await axios.post("http://localhost:8000/generate", {
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
