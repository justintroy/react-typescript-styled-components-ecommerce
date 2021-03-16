import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 5px;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
  body {
      background: #EEE
  }
  button,
  input {
      outline: 0;
  }
  button {
      cursor: pointer
  }
`;
