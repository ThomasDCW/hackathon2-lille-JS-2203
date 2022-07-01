import styled from "styled-components";

export default styled.div`
  margin-top: 8vh;
  display: flex;
  img {
    margin-left: 2vw;
    width: 300px;
    height: 200px;
  }
  .articleContainer {
    margin-left: 1em;
    width: 100%;

    article {
      margin: 1.6em;
      border-radius: 20px;
      color: #183650;
      .containDateStep {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: -4rem;
        .stepDate {
          font-size: 1.2rem;
        }
      }
      h1 {
        padding: 1em;
        font-size: 1.4em;
        font-weight: bold;
        border-bottom: 2px #5abdb2 solid;
        span {
          font-weight: lighter;
        }
      }
      button {
        margin-top: 2em;
        margin-left: 4vw;
        margin-bottom: 2em;
        background: no-repeat url(${(props) => props.img});
        background-size: 100%;
        background-position: center;
        border: none;
        border-radius: 8px;
        padding: 1.6em;
        //Here we use props with  styledComponent, coming from the component <SAudioPlayerControll img={playOrPauseImg}>
      }
      h2 {
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 0em;
        font-size: 1.2em;
        font-weight: bold;
      }
      .creator {
        color: #183650;
        font-size: 1rem;

        .spanCreator {
          color: #183650;
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
      h3 {
        padding: 1em;
        color: #e77620;
        font-size: 1.2rem;
        font-weight: bold;
      }
      margin-bottom: 2vh;
    }
    .link {
      margin-top: 1em;
      margin-bottom: 4vh;
      display: flex;
      justify-content: center;
      a {
        width: 40%;
        text-decoration: none;
        text-align: center;
        padding: 1em;
        border: 2px solid #183650;
        color: #183650;
        background: white;
        border-radius: 3px;
      }
      a:hover {
        transition: 0.6s;
        color: white;
        background: #183650;
      }
    }
  }
`;
