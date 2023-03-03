import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProps = {
  children: JSX.Element;
};

enum themePalette {
  BG = "#ddebf1",
  LIME = "#0a4072",
  FONT_GLOBAL = "'JetBrains Mon', monospace",
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(224, 210, 210, 0.1)",
  SUCCES_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102, 187, 106, .1)",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: ".5em",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: ".8em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.ERROR_MAIN}`,
          background: themePalette.BG_ERROR_MAIN,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.SUCCES_MAIN}`,
          background: themePalette.BG_SUCCESS_MAIN,
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
