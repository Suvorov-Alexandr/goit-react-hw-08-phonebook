import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
  
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1, h2{
    text-align: center;
    margin: 0 0 15px 0;
  };
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  .MuiOutlinedInput-input{
    width: 275px;
  }

  .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input{
    height: 18px;
    padding: 13.5px 14px;
  }

  .css-106c1u2-MuiBadge-badge{
    min-width: 27px;
    height: 27px;
    font-size: 1.2rem;
    border-radius: 15px;
  }
`;

export default GlobalStyle;
