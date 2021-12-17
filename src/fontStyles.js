import { createGlobalStyle } from "styled-components";
import AtkinsonWoff from "./fonts/atkinson-hyperlegible-regular.woff";
import AtkinsonWoff2 from "./fonts/atkinson-hyperlegible-regular.woff2";
import AtkinsonBoldWoff from "./fonts/atkinson-hyperlegible-bold.woff";
import AtkinsonBoldWoff2 from "./fonts/atkinson-hyperlegible-bold.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${AtkinsonWoff}) format('woff'),
       url(${AtkinsonWoff2}) format('woff2'),
       url(${AtkinsonBoldWoff}) format('woff'),
       url(${AtkinsonBoldWoff2}) format('woff2');
}
`;

export default FontStyles;
