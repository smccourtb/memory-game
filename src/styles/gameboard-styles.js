import styled from "styled-components";

export const BoardContainer = styled.main`
  display: grid;
  // boardSize comes from BoardGame as a prop. We need this to know how big
  // to make the game board.
  grid-template-columns: ${({ boardSize }) =>
    boardSize < 17 ? `1fr 1fr 1fr 1fr` : `1fr 1fr 1fr 1fr 1fr 1fr`};
  grid-template-rows: ${({ boardSize }) =>
    boardSize < 17 ? `1fr 1fr 1fr 1fr` : `1fr 1fr 1fr 1fr 1fr 1fr`};
  grid-row-gap: 12.29px;
  grid-column-gap: 12.29px;
  height: 327px;
  width: 100%;
`;
