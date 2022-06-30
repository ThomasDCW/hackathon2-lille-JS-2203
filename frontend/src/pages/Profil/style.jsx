import styled from "styled-components";

export default styled.div`
  .main {
    background-color: #e5e2e2;
    border: solid 0.2em rgb(232, 151, 89);
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    width: 30vw;
    height: 85vh;
    margin: auto;
    margin-top: 2vh;
    .imgPosition {
      text-align: center;
      img {
        margin-top: 2%;
        width: 25%;
        border-radius: 50%;
        border: solid 0.2em #18365088;
      }
    }
    .line {
      background-color: #18365088;
      width: 79%;
      height: 0.2em;
      margin: auto;
    }
    .infoP {
      margin: auto;
      width: 80%;
      height: 5%;
      margin-top: 3%;
      display: flex;
      justify-content: space-evenly;
    }
    .role {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
    .city {
      margin-top: 3%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 5%;
      }
    }
    .comp {
      margin-top: 2%;
      font-size: 0.7em;
      display: flex;
      justify-content: space-around;
      button {
        width: 30%;
        border: solid 0.1em rgb(232, 151, 89);
        background-color: #ffffff;
        margin-bottom: 1%;
        cursor: pointer;
      }
    }
    .mainCor {
      width: 100%;
      height: 23.5%;
      background-color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      justify-content: space-around;
    }
  }
`;
