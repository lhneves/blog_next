import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    backface-visibility: hidden;
    text-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  :focus {
    outline: none;
  }

  input::-ms-clear {
    display: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium}
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: .6;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
  }

  ul {
    list-style: none;
  }


`;

export const rem = (pixels: number) => `${pixels / 10}rem`;
