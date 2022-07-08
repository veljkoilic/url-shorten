import styled from "styled-components";

export const PillButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  background-color: var(--cyan);
  color: #fff;
  transition: 0.1s;
  &:hover{
    transition: 0.1s;
    opacity: 0.6;
  }
`;
