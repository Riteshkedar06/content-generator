import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { targetAudience, contentType } = req.body;
  console.log(targetAudience);
  try {
    const response = await axios.post("http://localhost:8000/generate", {
      targetAudience,
      contentType,
    });
    res.send({ content: response.data.content });
  } catch (error) {
    res.status(500).send({ error: "Error generating content" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
