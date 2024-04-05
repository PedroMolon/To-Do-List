import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
