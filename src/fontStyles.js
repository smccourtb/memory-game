import { createGlobalStyle } from "styled-components";
import AtkinsonWoff from "./assets/fonts/atkinson-hyperlegible-regular.woff";
import AtkinsonWoff2 from "./assets/fonts/atkinson-hyperlegible-regular.woff2";
import AtkinsonBoldWoff from "./assets/fonts/atkinson-hyperlegible-bold.woff";
import AtkinsonBoldWoff2 from "./assets/fonts/atkinson-hyperlegible-bold.woff2";

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: "Atkinson Hyperlegible";
    src: {
    url(${AtkinsonWoff})format('woff'),
    url(${AtkinsonBoldWoff})format('woff'),
    url(${AtkinsonWoff2})format('woff2'),
    url(${AtkinsonBoldWoff2})format('woff2');
    }
  }
`;

export default FontStyles;
