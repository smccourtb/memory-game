import { BoardContainer } from "../styles/Gameboard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Option from "./Option";

// TODO: change test prop name
const GameBoard = ({ test, setMoveCount }) => {
  const [picked, setPicked] = useState([]);
  const [matches, setMatches] = useState([]);
  const [board] = useState(shuffleArray(createBoard(16 / 2)));

  // create an array with the length of 16.
  // create 8 pairs of numbers (array.length/2)
  function createBoard(boardSize) {
    const boardArray = [];
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

  useEffect(() => {
    if (picked.length >= 2) {
      if (picked[0].value === picked[1].value) {
        setMatches((prev) => [...prev, picked[0].index, picked[1].index]);
      }
      setPicked([]);
      setMoveCount((prevCount) => prevCount + 1);
    }
  }, [picked]);

  const choices = board.map((optionValue, index) => (
    <Option
      key={index}
      index={index}
      value={optionValue}
      test={test}
      setPicked={setPicked}
      picked={picked}
      matches={matches}
    />
  ));
  return <BoardContainer>{choices}</BoardContainer>;
};

GameBoard.propTypes = {
  test: PropTypes.func,
  setMoveCount: PropTypes.func,
};

export default GameBoard;
