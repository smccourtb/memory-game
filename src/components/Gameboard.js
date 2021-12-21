import { BoardContainer } from "../styles/Gameboard";
import PropTypes from "prop-types";

import Option from "./Option";

const GameBoard = ({ test }) => {
  // create an array with the length of 16.
  // create 8 pairs of numbers (array.length/2)
  function createBoard(boardSize) {
    let boardArray = [];
    for (let i = 0; i < boardSize; i++) {
      boardArray.push(i, i);
    }
    return boardArray;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const board = shuffleArray(createBoard(16 / 2));
  const choices = board.map((optionValue, index) => (
    <Option key={index} value={optionValue} test={test} />
  ));
  return <BoardContainer>{choices}</BoardContainer>;
};

GameBoard.propTypes = {
  test: PropTypes.func,
};

export default GameBoard;
