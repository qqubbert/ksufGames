import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  /* all: unset; */
}

body {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
`