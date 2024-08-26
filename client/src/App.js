// src/App.js
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Home from "./pages/Home";
import GeneratedContentPage from "./pages/GeneratedContentPage";
import NavBar from "./components/Navbar";
import theme from "./theme";

function App() {
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateContent = async (formData) => {
    setLoading(true);
    setError("");
    setGeneratedContent(""); // Clear previous content

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/generate`,
        formData
      );
      setGeneratedContent(response.data.content);
    } catch (err) {
      setError("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/generate-content"
              element={
                <GeneratedContentPage
                  onGenerate={generateContent}
                  loading={loading}
                  error={error}
                  generatedContent={generatedContent}
                />
              }
            />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
