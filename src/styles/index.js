import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import AtkinsonWoff from "../assets/fonts/atkinson-hyperlegible-regular.woff";
import AtkinsonWoff2 from "../assets/fonts/atkinson-hyperlegible-regular.woff2";
import AtkinsonBoldWoff from "../assets/fonts/atkinson-hyperlegible-bold.woff";
import AtkinsonBoldWoff2 from "../assets/fonts/atkinson-hyperlegible-bold.woff2";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Atkinson Hyperlegible', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    @font-face {
      font-family: "Atkinson Hyperlegible";
      src: {
      url(${AtkinsonWoff})format('woff'),
      url(${AtkinsonBoldWoff})format('woff'),
      url(${AtkinsonWoff2})format('woff2'),
      url(${AtkinsonBoldWoff2})format('woff2');
      }
    }

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  * {
    box-sizing: border-box;
    font-family: 'Atkinson Hyperlegible', sans-serif;
  }
`;
