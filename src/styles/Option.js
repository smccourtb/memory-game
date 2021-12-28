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
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 700;
`;
