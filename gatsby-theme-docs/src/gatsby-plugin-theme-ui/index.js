import styles from "./styles";

export default {
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em"
  },
  initialColorMode: "light",
  colors: {
    text: "#000",
    background: "#fff",
    modes: {
      dark: {
        text: "#fff",
        background: "#000"
      }
    }
  },
  sizes: {
    container: 800
  },
  styles
};
