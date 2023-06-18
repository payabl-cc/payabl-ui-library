import styled, { css } from "styled-components";

export const PaymentButtonContainer = styled.button`
  background-color: #050505;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  align-self: center;

  &:active {
    background-color: #1c1d21;
  }
`;

export const BodyText = styled.p`
  margin: 0;
  font-family: "Work Sans Light";
  color: #ffffff;
  font-size: 0.875rem;

  @media (max-width: 816px) {
    font-size: 0.7rem;
  }
`;
