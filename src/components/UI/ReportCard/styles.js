import styled from "styled-components";

const Card = styled.div`
  align-self: start;
  border: 1px solid #000;
  border-radius: 0.3125rem;
  height: auto;
  box-shadow: 3px 3px 0px #000;

  .body {
    padding: 1.3125rem 1.375rem;

    p {
      color: #9c9c9c;
      font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
      line-height: 143%;
    }
  }
`;

export default Card;
