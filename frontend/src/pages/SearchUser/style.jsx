import styled from "styled-components";

export default styled.div`
  .searchbar {
    display: flex;
    justify-content: center;
    input {
      width: 300px;
      height: 30px;
      margin: 0.5em;
      margin-bottom: 4vh;
      font-size: 1em;
      border-width: 0 0 1px;
      border-color: #183650;
      ::placeholder {
        color: #454545;
        font-size: 1em;
      }
    }
  }
  p {
    padding: 0.5em;
    margin-bottom: 0.5em;
    &.useful {
      color: currentColor;
    }
    &.useless {
      color: #888;
    }
  }
  .userCardContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .userCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 1.6em;
      border-radius: 3px;
      border: 2px #183650 solid;
      width: 300px;
      height: 400px;
      text-align: center;
      .picture {
        width: 60%;
      }
      h1 {
        font-size: 1.2em;
        margin-bottom: 1em;
      }
      h2 {
        font-size: 1.3em;
        color: #e77620;
        margin-bottom: 1em;
      }
    }
    a {
      width: 20%;
      text-decoration: none;
      text-align: center;
      padding: 0.5em;
      border: 2px solid #183650;
      color: #183650;
      background: white;
      border-radius: 3px;
    }
    a:hover {
      transition: 0.5s;
      color: white;
      background: #5abdb2;
    }
  }
  .mail {
    height: 30px;
  }
`;
