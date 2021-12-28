import { BoardContainer } from "../styles/Gameboard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Option from "./Option";

const GameBoard = ({
  startTimer,
  setMoveCount,
  time,
  stopTimer,
  settings,
  playerTurn,
  setPlayerTurn,
  setScores,
  scores,
}) => {
  // keeps track of the values that have been selected
  const [picked, setPicked] = useState([]);
  // keeps track of correctly selected pairs
  const [matches, setMatches] = useState([]);

  // create an array with the pairs of numbers based on a given size
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
      // resets picked state to empty array after .5 seconds
      const timer = setTimeout(() => setPicked([]), 500);
      if (picked[0].value === picked[1].value) {
        setMatches((prev) => [...prev, picked[0].index, picked[1].index]);
        scores[playerTurn]++;
        setScores((prevScores) => ({
          ...prevScores,
        }));
      } else {
        if (settings.playerCount > 1) {
          setPlayerTurn(() => {
            if (playerTurn < settings.playerCount) {
              console.log("SHOULD INCREMENT");
              return playerTurn + 1;
            }
            return 1;
          });
        }
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
      // set player1 active
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
      settings={settings}
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
  playerTurn: PropTypes.number,
  setPlayerTurn: PropTypes.func,
  setScores: PropTypes.func,
  scores: PropTypes.object,
};

export default GameBoard;
