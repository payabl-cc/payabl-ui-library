import { createGlobalStyle } from "styled-components";

// For use with Storybook
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Work Sans Light";
    src: url("/fonts/WorkSans-Light.ttf");
    font-weight: 400;
    font-style: normal;
  }
  `;
