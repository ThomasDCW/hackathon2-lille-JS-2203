import styled from "styled-components";

export default styled.section`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 70vw;
  border-radius: 8px;
  border: 5px solid #183650;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  padding: 2em;
  margin: 2em;
  img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 50%;
    height: 250px;
    width: 250px;
  }
  .articleContainer {
    margin-left: 1em;
    article {
      margin: 1.6em;
      border-radius: 20px;
      color: #183650;
    }
    h1 {
      letter-spacing: 0.1em;
      padding: 1em;
      font-size: 1.6em;
    }
    p {
      letter-spacing: 0.1em;
      font-size: 1em;
    }
  }
`;
