// src/components/GeneratedContentPage.js
import React, { useState } from "react";
import { CircularProgress, Alert, Box } from "@mui/material";
import ContentForm from "../components/ContentForm";
import GeneratedContent from "../components/GeneratedContent";

const GeneratedContentPage = ({
  onGenerate,
  loading,
  error,
  generatedContent,
}) => {
  return (
    <Box
      sx={{
        padding: "20px",
        margin: "auto",
      }}
    >
      <ContentForm onGenerate={onGenerate} />
      {loading && (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <GeneratedContent content={generatedContent} contentType="blog" />{" "}
      {/* Adjust contentType as needed */}
    </Box>
  );
};

export default GeneratedContentPage;
