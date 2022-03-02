import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #282a36;
  --red: #FA8072;
  --blue: #5429CC;
  --blue-light: #6933ff;
  --purple: #bd93f9;
  --green: #33CC95;
  --text-title:#fff;
  --text-body: #f8f8f2;
  --shape: #44475a;
}
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width:720px){
    font-size: 87.5%;
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing:antialiased;
}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: var(--text-body);
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.5;
  cursor: not-allowed;
}

.react-modal-overlay{
  background: rgba(0,0,0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width: 576px;
  padding: 3rem;
  position: relative;
  background: var(--background);
  border-radius: 0.25rem;
}

.react-modal-close{ 
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: none;
  background: transparent;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
}
`