import styled from "styled-components";

export default styled.form`
  width: 60vw;
  height: 72vh;
  color: #183650;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #e89759;
  margin-right: auto;
  margin-left: auto;

  .bouton {
    width: 50%;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 1rem;
    padding: 1em;
    border: 2px solid #183650;
    color: #183650;
    background: white;
    border-radius: 3px;
  }
  .bouton:hover {
    transition: 0.6s;
    color: white;
    background: #183650;
  }
  input,
  textarea,
  select,
  option {
    margin: 2em;
    border-width: 0 0 1px;
    border-color: #183650;
    outline: none;
    ::placeholder {
      color: #183650;
      font-size: 1.3em;
    }
  }
  select,
  option {
    background-color: none;
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    margin: 1em;
    background-color: transparent;
  }
`;
