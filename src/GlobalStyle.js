import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "slnt" 0;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.whiteLilac};
  }
`;