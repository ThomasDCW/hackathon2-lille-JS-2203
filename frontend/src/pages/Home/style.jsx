import styled from "styled-components";
import img from "./fondMachine.png";

export default styled.div`
  .contain {
    display: flex;
    main {
      width: 70vw;
      border: 10px solid var(--color-blue);
      background-color: rgb(240, 240, 240);
      margin: 1rem 0 0 7rem;
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
      /* border: 5px solid #e89759; */
      border-radius: 10px;
      margin: 0.8rem;
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
      /* border: 5px solid var(--color-blue); */
      border-radius: 10px;
      margin: 0.8rem;
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
      /* border: 5px solid #5abdb2; */
      border-radius: 10px;
      margin: 0.8rem;
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
    .jeton {
      fill: #fff;
      transition: fill 0.3s;
    }
  }

  .jetonSkill.selected {
    opacity: 70%;
    background-color: white;
    color: #5abdb2;
    border: 7px solid var(--color-blue);
  }
  .jetonSkill:hover {
    opacity: 70%;
    background-color: white;
    color: #5abdb2;
    border: 7px solid var(--color-blue);
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
  }
  .jetonStep.selected {
    opacity: 70%;
    background-color: white;
    color: #e89759;
    border: 10px solid #5abdb2;
  }
  .jetonStep:hover {
    opacity: 70%;
    background-color: white;
    color: #e89759;
    border: 10px solid #5abdb2;
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
  }
  .jetonCateg.selected {
    opacity: 70%;
    background-color: white;
    border: 5px solid #e89759;
    color: var(--color-blue);
  }
  .jetonCateg:hover {
    opacity: 70%;
    background-color: white;
    border: 5px solid #e89759;
    color: var(--color-blue);
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
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
    background-image: url(${img});
    background-size: 23rem;
    height: 73vh;
    margin-top: 1rem;

    p {
      color: #e89759;
      font-weight: bolder;
      font-size: 1rem;
      text-align: center;

      margin: 1rem 0;
      span {
        font-size: 2.5rem;
        color: white;
      }
    }
    .buttonResults {
      display: flex;
      justify-content: center;
      .button {
        background-color: #e89759;
        border: 3px solid #e89759;
        border-radius: 5px;
        margin: 15rem 0;
        text-align: center;
        color: white;
        width: 12rem;
        height: 4rem;
        font-size: 1.5rem;
      }
    }
    .opacity {
      background-color: #183650aa;
      width: 100%;
      height: 100%;
    }
    .slogan {
      padding-top: 4rem;
    }
  }
`;
