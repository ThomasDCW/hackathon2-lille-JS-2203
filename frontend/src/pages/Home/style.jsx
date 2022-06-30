import styled from "styled-components";

export default styled.div`
  main {
    width: 90vw;
    border: 3px solid var(--color-blue);
    background-color: rgb(240, 240, 240);
    margin: auto;
    margin-top: 1rem;
    height: 70vh;
    padding: 1rem;
    overflow: scroll;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
  .button {
    background-color: var(--color-orange);
    padding: 0.5em 1.75em 0.5em;
    margin: 4vh 0;
    text-align: center;
  }
  .jetonCateg {
    background-color: var(--color-blue);
    border: 5px solid #e89759;
    margin: 1rem;
    border-radius: 50%;
    padding: 0.9rem;
    color: white;
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
  }
  .jetonSkill {
    background-color: #5abdb2;
    border: 5px solid var(--color-blue);
    margin: 1rem;
    border-radius: 50%;
    padding: 0.9rem;
    color: white;
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
  }
  .jetonStep {
    background-color: #e89759;
    border: 5px solid #5abdb2;
    margin: 1rem;
    border-radius: 50%;
    padding: 0.9rem;
    color: white;
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
  }
`;
