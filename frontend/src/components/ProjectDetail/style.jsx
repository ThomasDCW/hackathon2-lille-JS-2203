import styled from "styled-components";

export default styled.div`
  padding: 2em;
  border: 2px solid #183650;
  display: flex;
  width: 90vw;
  margin: auto;
  height: 100vh;
  .containDateStep {
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  img {
    height: 250px;
    width: 250px;
  }
  h1 {
    padding: 0.2em;
    font-size: 4em;
    font-weight: bold;
    border-bottom: 5px solid #5abdb2;
    span {
      font-size: 0.6em;
      font-weight: lighter;
    }
  }
  p {
    font-size: 2em;
    margin: 2rem 0;
  }
  .descProject {
    font-size: 1.2rem;
  }
  .creator {
    color: #e89759;
    font-size: 1.2rem;

    .spanCreator {
      color: #e77620;
      font-size: 1.4rem;
    }
  }

  div {
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
