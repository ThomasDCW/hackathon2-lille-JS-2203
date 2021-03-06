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
    }
  }

  .jetonSkill.selected {
    opacity: 70%;
    background-color: white;
    color: #5abdb2;
    border: 5px solid var(--color-blue);
  }
  .jetonSkill:hover {
    transform: scale(1.1);
    opacity: 70%;
    background-color: white;
    color: #5abdb2;
    border: 5px solid var(--color-blue);
    transition: all 0.2s ease 0s;

    cursor: pointer;
  }
  .jetonStep.selected {
    opacity: 70%;
    background-color: white;
    color: #e89759;
    border: 5px solid #5abdb2;
  }
  .jetonStep:hover {
    transform: scale(1.1);
    opacity: 70%;
    background-color: white;
    color: #e89759;
    border: 5px solid #5abdb2;
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .jetonCateg.selected {
    opacity: 70%;
    background-color: white;
    border: 5px solid #e89759;
    color: var(--color-blue);
  }
  .jetonCateg:hover {
    transform: scale(1.1);
    opacity: 70%;
    background-color: white;
    border: 5px solid #e89759;
    color: var(--color-blue);
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    cursor: pointer;
  }
  .link-off {
    display: none;
  }
  .ok-off {
    display: none;
  }
  .containButton {
    width: 12vw;
    border: 10px solid var(--color-blue);
    background-image: url(${img});
    background-size: 23rem;
    height: 73vh;
    margin-top: 1rem;

    p {
      padding-top: 3em;
      color: #e89759;
      font-weight: bolder;
      font-size: 1rem;
      text-align: center;

      span {
        font-size: 1.2rem;
        color: white;
      }
    }

    .buttonResults {
      display: flex;
      justify-content: center;
      .button {
        cursor: pointer;
        background-color: #e89759;
        border: 3px solid #e89759;
        border-radius: 5px;
        margin: 10rem 0;
        text-align: center;
        color: white;
        width: 12rem;
        height: 4rem;
        font-size: 1.5rem;
      }
      .button:hover {
        background-color: white;
        color: #e89759;
      }
    }
    .opacity {
      background-color: #183650aa;
      width: 100%;
      height: 100%;
    }
    .buttonBottom {
      border: 1px solid red;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    .contain {
      display: flex;
      flex-direction: column;
      align-items: center;
      main {
        margin: 1rem 0 0 0;
        height: 70vh;
        width: 80vw;
        .jetonCateg {
          background-color: var(--color-blue);
          border-radius: 10px;
          margin: 0.8rem;
          padding: 0.9rem;
          color: white;
          width: 7.5rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 1.1rem;
        }
        .jetonSkill {
          background-color: #5abdb2;
          border-radius: 10px;
          margin: 0.8rem;
          padding: 0.9rem;
          color: white;
          width: 7.5rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 1.1rem;
        }
        .jetonStep {
          background-color: #e89759;
          border-radius: 10px;
          margin: 0.8rem;
          padding: 0.9rem;
          color: white;
          width: 7.5rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 1.1rem;
        }
      }
      .containButton {
        width: 86vw;
        height: 40vh;
        .buttonResults {
          .button {
            margin: 1rem 0;
          }
        }
        p {
          span {
            padding: 0 7rem;
          }
        }
      }
    }
  }
`;
