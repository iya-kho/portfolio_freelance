import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './variables';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.primary};
  }

  h1, h2, h3 {
    font-family: ${fonts.secondary};
    text-transform: uppercase;
    font-size: 40px;
  }

  h2 {
    color: ${colors.secondary};
    padding-bottom: 25px;
    // text-align: center;
  }

  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  h4 {
    margin: 20px 0;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  .wrapLarge, .wrapSmall {
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .wrapLarge {
    max-width: 1400px;
  }

  .wrapSmall {
    max-width: 800px;
  }

  .sectionVertPadding {
    padding-top: 50px;
  }

  header, 
  #home {
    background-color: ${colors.primary};
  }

  header > *,
  #home > * {
    color: #fff
  }

  .custom-type-animation-cursor::after {
    content: '|';
    animation: cursor 1.1s infinite step-start;
  }

  @keyframes cursor {
    50% {
      opacity: 0;
    }
  }

  .bgCol1 {
    background-color: ${colors.palette.bgCol1}
  }

  .bgCol2 {
    background-color: ${colors.palette.bgCol2}
  }

  .bgCol3 {
    background-color: ${colors.palette.bgCol3}
  }

  .bgCol4 {
    background-color: ${colors.palette.bgCol4}
  }

  .bgCol5 {
    background-color: ${colors.palette.bgCol5}
  }

`;
