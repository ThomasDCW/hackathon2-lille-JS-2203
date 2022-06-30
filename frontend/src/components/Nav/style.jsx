import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: center;
  text-decoration: none;
  button {
    border: none;
    margin: 2em;
    text-decoration: none;
    background: linear-gradient(to top, #e77620, #e77620, transparent 10%)
      no-repeat left bottom / 0 100%;
    transition: background-size 1.2s;
    color: #454545;
    cursor: pointer;
    font-size: 1.2em;
  }

  a {
    text-decoration: none;
    transition: background-size 1.2s;
    color: #454545;
  }
  a:visited {
    text-decoration: none;
  }
  button:hover,
  a:hover {
    background-size: 100% 100%;
    color: #e77620;
  }
`;
