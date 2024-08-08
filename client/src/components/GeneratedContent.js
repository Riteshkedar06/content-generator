import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

const GeneratedContent = ({ content, contentType }) => {
  // Define styles for different content types
  const blogStyles = {
    header: { marginBottom: "16px", color: "#333" },
    body: { lineHeight: "1.6", color: "#555" },
  };

  const emailStyles = {
    header: { marginBottom: "16px", color: "#333" },
    body: { lineHeight: "1.6", color: "#555" },
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {contentType === "blog" && (
        <Paper
          sx={{
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" component="h2" sx={blogStyles.header}>
            Blog Post
          </Typography>
          <Divider />
          <Typography variant="body1" sx={blogStyles.body}>
            {content}
          </Typography>
        </Paper>
      )}

      {contentType === "email" && (
        <Paper
          sx={{
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" component="h2" sx={emailStyles.header}>
            Email Content
          </Typography>
          <Divider />
          <Typography variant="body1" sx={emailStyles.body}>
            {content}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default GeneratedContent;
