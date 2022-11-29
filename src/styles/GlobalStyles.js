import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --primary: #18A0FB;
    --secondary: #6DE4EA;
    --tertiary: rgb(0,0,0, 0.8);

    --white: #fff;
    --gray: #8a8c90;

    --transition: all 400ms ease;
  }

  html {
    scroll-behavior: smooth;
  }

  /* ::-webkit-scrollbar {
    display: none;
  } */

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--white);
    line-height: 1.7;
  }
`;
