import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const themePalette = createTheme({
  palette: {
    primary: {
      main: "#222222",
      dark: "#000",
      light: "#ffffff",
    },
    secondary: {
      main: "#8894b7",
    },
    text: {
      primary: "#000",
      secondary: "#2222",
      tertiary: "#8894b7",
    },
  },
});
export const theme = responsiveFontSizes(themePalette);