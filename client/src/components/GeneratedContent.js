import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import { marked } from "marked";
import { styled } from "@mui/system";

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

  const renderMarkdown = (markdownText) => {
    return { __html: marked(markdownText) };
  };

  const AnimatedPaper = styled(Paper)({
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "5px 8px 16px rgba(0, 0, 0, 0.2)",
    },
  });

  return (
    <Box sx={{ padding: "20px", margin: "auto", mt: 10 }}>
      {contentType === "blog" && (
        <AnimatedPaper
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
          <Typography
            variant="body1"
            sx={blogStyles.body}
            dangerouslySetInnerHTML={renderMarkdown(content)}
          />
        </AnimatedPaper>
      )}

      {contentType === "email" && (
        <AnimatedPaper
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
          <Typography
            variant="body1"
            sx={emailStyles.body}
            dangerouslySetInnerHTML={renderMarkdown(content)}
          />
        </AnimatedPaper>
      )}
    </Box>
  );
};

export default GeneratedContent;
