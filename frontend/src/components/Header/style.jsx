import styled from "styled-components";

export default styled.header`
  background-color: #e89759;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 4vh;
    margin: 01em;
  }
  img {
    cursor: pointer;
  }
  h1 {
    text-align: center;
    margin: 0.5rem;
    color: #183650;
    font-weight: bold;
    letter-spacing: 0.3em;
    font: "Montserra";
  }
`;
