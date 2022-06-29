import styled from "styled-components";

export default styled.div`
  main {
    width: 90vw;
    border: 3px solid var(--color-blue);
    background-color: rgb(240, 240, 240);
    margin: auto;
    margin-top: 1rem;
    height: 50vh;
    padding: 1rem;
  }
  .list {
    display: flex;
  }
  .button {
    background-color: var(--color-orange);
    padding: 0.5em 1.75em 0.5em;
    margin: 4vh 0;
    text-align: center;
  }
  .jeton {
    background-color: var(--color-blue);
    border: 1px solid red;
    margin: 1rem;
    border-radius: 50%;
    padding: 0.9rem;
    color: white;
    width: 4rem;
  }
`;
