import styled from "styled-components";

export default styled.div`
  padding: 2em;
  border: 2px solid #183650;
  display: flex;

  img {
    height: 250px;
    width: 250px;
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
    font-size: 1.2rem;

    .spanCreator {
      color: #e77620;
      font-size: 1.4rem;
    }
  }

  div {
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
  button {
    color: red;
    width: 5vw;
    height: 5vh;
    background: no-repeat url(${(props) => props.img});
    background-size: contain;
    border: none;
    //Here we use props with  styledComponent, coming from the component <SAudioPlayerControll img={playOrPauseImg}>
  }
`;
