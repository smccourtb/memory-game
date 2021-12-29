import styled from "styled-components";

export const BoardContainer = styled.main`
  display: grid;
  // boardSize comes from BoardGame as a prop. We need this to know how big
  // to make the game board.
  grid-template-columns: ${({ boardSize }) =>
    boardSize < 17 ? `1fr 1fr 1fr 1fr` : `1fr 1fr 1fr 1fr 1fr 1fr`};
  grid-template-rows: ${({ boardSize }) =>
    boardSize < 17 ? `1fr 1fr 1fr 1fr` : `1fr 1fr 1fr 1fr 1fr 1fr`};
  grid-row-gap: 0.5em;
  grid-column-gap: 0.5em;
  width: 100%;
  max-width: 30em;
  max-height: 30em;
  height: 90vw;
  @media (min-width: 768px) {
    gap: 1.1em;
  }
`;
