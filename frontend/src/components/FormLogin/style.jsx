import styled from "styled-components";

export default styled.div`
  width: 40vw;
  height: 80vh;
  color: #183650;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  h1 {
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 3px solid #e89759;
    border-radius: 8px;
    height: 60%;
    width: 100%;
    .textContainer {
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
      margin: 0.8em;
    }
    h2 {
      margin: 1em;
      font-size: 1.2em;
    }
    input {
      margin: 1.2em;
      outline: 0;
      border-width: 0 0 2px;
      border-color: #183650;
      ::placeholder {
        color: #183650;
        font-size: 1em;
      }
    }
  }
  .textContainer {
    display: flex;
    justify-content: center;
    font-size: 0.6em;
    margin: 0.3em;
    span {
      color: #e89759;
    }
  }
  div {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    a {
      width: 75%;
      text-decoration: none;
      text-align: center;
      padding: 1em;
      color: white;
      background: #183650;
      border-radius: 8px;
    }
  }
`;
