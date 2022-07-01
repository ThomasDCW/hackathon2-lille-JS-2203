import styled from "styled-components";

export default styled.footer`
  margin-top: 8vh;
  img {
    height: 6vh;
    padding: 1em;
  }
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  background-color: #183650;
  ul {
    display: flex;
    a {
      color: white;
      font-weight: bold;
      text-decoration: none;
      transition: background-size 1.2s;
      border: none;
      margin: 1.6em;
      text-decoration: none;
      background: linear-gradient(to top, #e77620, #e77620, transparent 10%)
        no-repeat left bottom / 0 100%;
      transition: background-size 1.2s;

      cursor: pointer;
      font-size: 1em;
    }
    a:visited {
      text-decoration: none;
    }
    a:hover {
      background-size: 100% 100%;
      color: #e77620;
    }
  }
  h1 {
    padding: 1em;
    font-size: 0.8em;
  }
`;
