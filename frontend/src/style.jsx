import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Poppins&display=swap");

  --color-orange: rgb(232, 151, 89);
  --color-light-grey: rgb(240,240,240)
  --color-dark-grey: #18365088;
  --color-blue: rgb(24, 54, 80);
  --clor-black:#464646

  /*paragraph variable*/
  --font-color-paragraph: #080708;
  --font-size-paragraph: 1rem;

  /*Paddings et margins */
  /*Déclaration de l'arriere plan general*/
  margin: 0;

  font: 1.5rem "Poppins", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  letter-spacing: 0.1rem;
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
  }
`;
