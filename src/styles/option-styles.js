import styled, { css } from "styled-components";

export const Container = styled.button`
  ${(props) =>
    props.chosen
      ? css`
           {
            background-color: #fda214;
          }
        `
      : css`
           {
            background-color: #304859;
          }
        `};
  ${(props) =>
    props.matches &&
    css`{
            background-color: #BCCED9`};
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.div`
  color: white;
  font-size: ${({ smallText }) => (smallText ? "24px" : "40px")};
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: ${({ smallText }) => (smallText ? "44px" : "56px")};
  }
`;
