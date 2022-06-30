import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    text-decoration: none;
    transition: background-size 1.2s;
    color: #454545;
    border: none;
    margin: 1.6em;
    text-decoration: none;
    background: linear-gradient(to top, #e77620, #e77620, transparent 10%)
      no-repeat left bottom / 0 100%;
    transition: background-size 1.2s;
    color: #454545;
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
`;
