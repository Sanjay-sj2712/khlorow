"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// CSS variable names injected by layout.js via next/font/google
const FONT_HEADING = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const FONT_BODY    = "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c9a96e",
      light: "#e8d5b0",
      dark: "#a07840",
    },
    secondary: {
      main: "#6e9bc9",
      light: "#a0c4e0",
      dark: "#3d6e9e",
    },
    background: {
      default: "#0a0a0a",
      paper: "#141414",
    },
    text: {
      primary: "#f5f0eb",
      secondary: "#a89880",
    },
    divider: "rgba(201,169,110,0.15)",
  },
  typography: {
    // Default (body) font — Plus Jakarta Sans
    fontFamily: FONT_BODY,

    // All heading variants — Cormorant Garamond
    h1: { fontFamily: FONT_HEADING, fontWeight: 300, letterSpacing: "-0.02em" },
    h2: { fontFamily: FONT_HEADING, fontWeight: 300, letterSpacing: "-0.01em" },
    h3: { fontFamily: FONT_HEADING, fontWeight: 400, letterSpacing: "0" },
    h4: { fontFamily: FONT_HEADING, fontWeight: 400 },
    h5: { fontFamily: FONT_HEADING, fontWeight: 500 },
    h6: { fontFamily: FONT_HEADING, fontWeight: 500 },

    // Body and utility — Plus Jakarta Sans (inherited from fontFamily)
    body1:    { fontFamily: FONT_BODY },
    body2:    { fontFamily: FONT_BODY },
    subtitle1:{ fontFamily: FONT_BODY },
    subtitle2:{ fontFamily: FONT_BODY },
    caption:  { fontFamily: FONT_BODY },
    overline: { fontFamily: FONT_BODY, letterSpacing: "0.2em", fontWeight: 600 },
    button:   { fontFamily: FONT_BODY, letterSpacing: "0.08em" },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 1,
          fontWeight: 500,
          letterSpacing: "0.08em",
          padding: "10px 28px",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #c9a96e 0%, #a07840 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #e8d5b0 0%, #c9a96e 100%)",
            boxShadow: "0 8px 32px rgba(201,169,110,0.35)",
          },
        },
        outlinedPrimary: {
          borderColor: "#c9a96e",
          "&:hover": {
            backgroundColor: "rgba(201,169,110,0.08)",
            borderColor: "#e8d5b0",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#141414",
          border: "1px solid rgba(201,169,110,0.08)",
          backgroundImage: "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            borderColor: "rgba(201,169,110,0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(201,169,110,0.25)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(201,169,110,0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#c9a96e",
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(201,169,110,0.15)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
