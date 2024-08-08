import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Merriweather', serif",
    h1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
