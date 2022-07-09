import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    } 
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 815px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 1440px) {
      ${props}
    }
  `;
};