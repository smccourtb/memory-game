import { BoardContainer } from "../styles/Gameboard";
import Option from "./Option";

const GameBoard = () => {
  // create an array with the length of 16.
  // create 8 pairs of numbers (array.length/2)
  function createBoard(length) {
    let boardArray = [];
    for (let i = 0; i < length; i++) {
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

  const choices = board.map((option, index) => (
    <Option key={index} value={option} />
  ));
  return <BoardContainer>{choices}</BoardContainer>;
};

export default GameBoard;
