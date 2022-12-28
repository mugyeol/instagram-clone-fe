import { createGlobalStyle } from "styled-components";
export const supportDeviceSize = 768;
export const supportDeviceSize_ = 1100;

const GlobalStyle = createGlobalStyle`


  :root{
    --ig-primary-background : #000000;
    --ig-secondary-background : #121212;

    --ig-elevated-separator: #363636; 
    --ig-elevated-background:#262626; //38 38 38

    --ig-primary-logo: invert(99%) sepia(3%) saturate(4%) hue-rotate(233deg) brightness(101%) contrast(101%);
    --ig-secondary-logo: invert(14%) sepia(11%) saturate(1442%) hue-rotate(315deg) brightness(91%) contrast(101%);

    --ig-elevated-sp-filter :  invert(19%) sepia(5%) saturate(3%) hue-rotate(315deg) brightness(98%) contrast(93%); //#363636
    --ig-elevated-bg-filter : invert(10%) sepia(14%) saturate(3%) hue-rotate(338deg) brightness(88%) contrast(86%); //#262626
    --ig-heartfill-filter: invert(44%) sepia(90%) saturate(4091%) hue-rotate(332deg) brightness(101%) contrast(86%); //#ED4956

    --ig-primary-text: #fafafa;
    --ig-secondary-text: #000000;
    --ig-third-text:#8E8E8E;
    --ig-taglink-text:#E0F1FF;
    
    --ig-primary-button-background: #0095F6;
    --ig-primary-button-hover: #1877F2;
    
    --ig-secondary-button-background:#EFEFEF;
    --ig-secondary-button-hover : #DBDBDB;


    --ig-light-theme-background : #FAFAFA;
    --ig-light-theme-text: #8E8E8E;
    --ig-light-theme-secondary-text: #262626;
    --ig-light-theme-separator:#DBDBDB;
    
    --ig-color-red:#ED4956;

    --color-yellow: #F8D706;
    --color-gray: #B2B2B2;
    --color-primary: #0095F6;
    --color-primary-invalid:#B2DDFF;
    --color-light-gray:#7F7F7F;
    --color-black:#2F1B1A;
    --color-white:#FFFFFF;
    --color-red:#F04438;
    --color-subtle-gray:#CCCCCC;

    --ig-width-addpost-img-wrapper:60rem; 
    --ig-post-padding:1.5rem;
    --ig-profile-post:3.5rem

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
    h1{
      font-size: 2.2rem;
    }
    h2{
      font-size: 1.6rem;
    }
    h3 { 
      font-size:1.4rem;
    }
    .primary-text { 
      color :var(--ig-primary-text);
    }
    .third-text { 
      color :var(--ig-third-text);
    }
  }
  
  
`;

export default GlobalStyle;
