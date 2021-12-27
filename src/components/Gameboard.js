import { BoardContainer } from "../styles/Gameboard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Option from "./Option";

// TODO: change test prop name
const GameBoard = ({ startTimer, setMoveCount, time, stopTimer, settings }) => {
  const [picked, setPicked] = useState([]);
  const [matches, setMatches] = useState([]);

  // create an array with the length of 16.
  // create 8 pairs of numbers (array.length/2)
  const createBoard = (boardSize) => {
    const boardArray = [];
    for (let i = 0; i < boardSize; i++) {
      boardArray.push(i, i);
    }
    return boardArray;
  };

  const [board, setBoard] = useState(
    shuffleArray(createBoard(settings.boardSize / 2))
  );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (picked.length >= 2) {
      const timer = setTimeout(() => setPicked([]), 500);
      if (picked[0].value === picked[1].value) {
        setMatches((prev) => [...prev, picked[0].index, picked[1].index]);
      }

      setMoveCount((prevCount) => prevCount + 1);
      return () => clearTimeout(timer);
    }
    if (matches.length > 14) {
      console.log("YOU WIN");
      stopTimer();
      setMatches([]);
      setPicked([]);
      setBoard((prevBoard) => shuffleArray([...prevBoard]));
    }

    if (time === "0 : 00" && picked.length > 0) {
      startTimer();
    }
  }, [picked]);

  const choices = board.map((optionValue, index) => (
    <Option
      key={index}
      index={index}
      value={optionValue}
      setPicked={setPicked}
      picked={picked}
      matches={matches}
    />
  ));
  return (
    <BoardContainer boardSize={settings.boardSize}>{choices}</BoardContainer>
  );
};

GameBoard.propTypes = {
  startTimer: PropTypes.func,
  setMoveCount: PropTypes.func,
  time: PropTypes.string,
  stopTimer: PropTypes.func,
  reset: PropTypes.bool,
  settings: PropTypes.object,
};

export default GameBoard;
