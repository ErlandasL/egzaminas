import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--lightBlue);
  border: 0.09rem solid var(--lightBlue);
  border-color: var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    border-color: var(--buttonBlue);
    background: var(--buttonBlue);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
