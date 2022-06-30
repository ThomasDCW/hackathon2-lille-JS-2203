import styled from "styled-components";

export default styled.div`
  .searchbar {
    display: flex;
    justify-content: center;
    input {
      width: 300px;
      height: 30px;
      margin: 1em;

      border-width: 0 0 1px;
      border-color: #183650;
      ::placeholder {
        color: #183650;
        font-size: 1.3em;
      }
    }
  }
`;
