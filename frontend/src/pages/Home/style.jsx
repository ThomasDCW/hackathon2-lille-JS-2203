import styled from "styled-components";

export default styled.div`
  .contain {
    display: flex;
    main {
      width: 70vw;
      border: 10px solid var(--color-blue);
      background-color: rgb(240, 240, 240);
      margin: 1rem 0 0 1rem;
      height: 70vh;
      padding: 1rem;
      overflow: scroll;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      overflow: visible;
    }

    .jetonCateg {
      background-color: var(--color-blue);
      border: 5px solid #e89759;
      margin: 0.5rem;
      padding: 0.9rem;
      color: white;
      width: 10rem;
      height: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1.1rem;
    }
    .jetonSkill {
      background-color: #5abdb2;
      border: 5px solid var(--color-blue);
      margin: 0.5rem;
      padding: 0.9rem;
      color: white;
      width: 10rem;
      height: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1.1rem;
    }
    .jetonStep {
      background-color: #e89759;
      border: 5px solid #5abdb2;
      margin: 0.5rem;
      padding: 0.9rem;
      color: white;
      width: 10rem;
      height: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1.1rem;
    }
  }
  .selected {
    border: 5px solid var(--color-button);
    opacity: 50%;
  }

  .link-off {
    display: none;
  }
  .ok-off {
    opacity: 20%;
  }
  .containButton {
    width: 12vw;
    border: 10px solid var(--color-blue);
    background-color: var(--color-blue);
    height: 70vh;
    margin-top: 1rem;
    padding: 1rem;
    p {
      color: #e89759;
      font-weight: bolder;
      font-size: 2rem;
      text-align: center;
    }
    .buttonResults {
      display: flex;
      justify-content: center;
      .button {
        background-color: var(--color-orange);
        padding: 0.5em 1.75em 0.5em;
        margin: 2rem 0;
        text-align: center;
      }
    }
  }
`;
