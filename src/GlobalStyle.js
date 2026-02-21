import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --deepBlue: #262663;
    --font-inter: "__inter_20b187","__inter_Fallback_20b187";
  }

  * {
    box-sizing: border-box;
    /* font-family: 'Abel', sans-serif; */
    font-family: var(--font-inter),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }

  body {
    margin: 0;
    padding: 0;
    text-align: center;
    
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--white);
      /* color: --bgColor; */
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }   
`;