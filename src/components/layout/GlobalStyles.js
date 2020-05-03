import { createGlobalStyle } from "styled-components"

import config from "../../../data/config"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.bg};
    transition: all 300ms ease-in-out;
    font-family: ${config.fonts.body};
    font-weight: 400;
    line-height: 1.6;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: ${config.fonts.headers}
  }
`
