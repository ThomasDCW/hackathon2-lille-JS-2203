import styled from "styled-components";

export default styled.section`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid green;
  width: 70vw;
  height: 32vh;
  background-color: #183650;
  border-radius: 20px;
  margin: 5%;
  img {
    height: 96%;
    width: 32%;
    border-radius: 70px;
    border: 6px solid #183650;
    float: left;
  }
  .articleContainer {
    padding-left: 2em;
    article {
      border: 6px solid #183650;
      border-radius: 20px;
      margin-top: 4%;
      height: 24vh;
      color: #183650;
      background-color: white;
    }
    h1 {
      margin-left: 3em;
      padding: 0.5em;
      font-size: 1.6em;
    }
    p {
      font-size: 1em;
    }
  }
`;
