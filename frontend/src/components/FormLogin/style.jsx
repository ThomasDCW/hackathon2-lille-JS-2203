import styled from "styled-components";

export default styled.div`
  width: 40vw;
  height: 72vh;
  color: #183650;
  margin-top: 2vh;
  h1 {
    font-size: 1.4em;
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #e89759;
    border-radius: 3px;
    height: 50%;
    width: 100%;
    .textContainer {
      cursor: pointer;
      text-decoration: underline;
      display: flex;
      justify-content: center;
      font-size: 0.9em;
      margin: 1em;
    }
    h2 {
      margin: 1em;
      font-size: 1.2em;
    }
    input {
      margin: 1em;

      border-width: 0 0 1px;
      border-color: #183650;
      ::placeholder {
        color: #183650;
        font-size: 1.3em;
      }
    }
  }
  .textContainer {
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    margin-top: 3em;
    span {
      color: #e89759;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  div {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    a {
      width: 50%;
      text-decoration: none;
      text-align: center;
      padding: 1em;
      border: 2px solid #183650;
      color: #183650;
      background: white;
      border-radius: 3px;
    }
    a:hover {
      transition: 0.6s;
      color: white;
      background: #183650;
    }
  }
`;
