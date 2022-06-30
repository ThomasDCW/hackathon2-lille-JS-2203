import styled from "styled-components";

export default styled.section`
  width: 80vw;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 2em;
  margin: 2em;
  border: 2px solid #5abdb2;
  img {
    height: 250px;
    width: 250px;
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
          font-size: 1rem;
        }
      }
      h1 {
        padding: 1em;
        font-size: 2.6em;
        font-weight: bold;
        span {
          font-weight: lighter;
        }
      }
      p {
        font-size: 2em;
      }
      .creator {
        color: #e89759;
        font-size: 1.2rem;

        .spanCreator {
          color: #e77620;
          font-size: 2rem;
        }
      }
    }
  }
  div {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    a {
      width: 50%;
      text-decoration: none;
      text-align: center;
      padding: 1em;
      border: 2px solid #183650;
      color: #183650;
      background: white;
      border-radius: 3px;
      font-size: 2em;
    }
    a:hover {
      transition: 0.6s;
      color: white;
      background: #183650;
    }
  }
  @media screen and (max-width: 600px) {
    border: 2px solid #5abdb2;
    img {
      display: none;
    }
    .articleContainer {
      margin-left: 1em;
      width: 100%;
      article {
        margin: 0;
        border-radius: 20px;
        color: #183650;
        .containDateStep {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: -4rem;
          .stepDate {
            font-size: 1rem;
          }
        }
        h1 {
          padding: 1em;
          font-size: 1.6em;
          font-weight: bold;
          span {
            font-size: 0.6em;
            font-weight: lighter;
          }
        }
        p {
          font-size: 1em;
        }
        .creator {
          color: #e89759;
          font-size: 1rem;

          .spanCreator {
            color: #e77620;
            font-size: 1.4rem;
          }
        }
      }
    }
    div {
      margin-top: 2em;
      display: flex;
      justify-content: center;
      a {
        width: 50%;
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
