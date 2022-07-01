import styled from "styled-components";

export default styled.div`
  height: 23%;
  width: 31%;
  background-color: rgb(232, 151, 89);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0.5%;
  font-size: 0.8em;
  border: solid 0.1em #18365088;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 0.5rem;
  }
`;
