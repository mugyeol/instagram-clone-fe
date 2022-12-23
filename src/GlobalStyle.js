import { createGlobalStyle } from "styled-components";
export const supportDeviceSize = 768;
export const supportDeviceSize_ = 1100;

const GlobalStyle = createGlobalStyle`


  :root{
    --ig-secondary-background : #121212;
    --ig-primary-background : #000000;
    --ig-primary-text: #FAFAFA;
    --ig-elevated-separator: #363636;
    }

  html {
    font-size: 62.5%; // 1rem = 10px 로 변경 한 것
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
  }

  body {

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 1.4rem;
    color: var(--ig-primary-text);
    background-color: var(--ig-primary-background);
    width: 100vw;
    height: 100vh;
    font-weight: 600;
  }
  
  
`;

export default GlobalStyle;
