import styled, { css } from "styled-components";

export const BoardContainer = styled.main`
  display: grid;
  ${(props) =>
    props.boardSize === 16
      ? css`
           {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        `
      : css`
           {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
        `};
  ${(props) =>
    props.boardSize === 16
      ? css`
           {
            grid-template-rows: 1fr 1fr 1fr 1fr;
          }
        `
      : css`
           {
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
        `};
  grid-row-gap: 12.29px;
  grid-column-gap: 12.29px;
  height: 327px;
  width: 100%;
`;
