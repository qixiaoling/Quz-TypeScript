import styled, {createGlobalStyle} from "styled-components";
import BG from './Image/Quiz_2.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    background-image: url(${BG});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }


`
export const Wrapper = styled.div`
  z-index: 5;
  width: 80%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;

  .btn {
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: .5em 2.5em;
    background: palegoldenrod ;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    transition: transform 200ms ease-in-out;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,0.25),
    0.125em 0.125em 0.25em rgba(0,0,0, 0.15);
  }

  .btn:hover {
    cursor: pointer;
    background-color: beige;
  }
  >h1 {
    color: deeppink;
  }
  .next-btn {
    width: 80%;
    background-color: deeppink;
    padding: .25em 1.85em;
    margin: 2rem auto;
  }
  .next-btn:hover {
    background-color: hotpink;
  }
  p {
    font-weight: 700;
  }
`