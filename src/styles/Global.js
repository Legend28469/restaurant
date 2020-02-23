import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;

    h1, h2, h3, h4, h5, h6 {
        font-family: "Open Sans Condensed", sans-serif;
    }
  }
`

export default GlobalStyle
