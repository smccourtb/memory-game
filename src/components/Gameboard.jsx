import { BoardContainer } from "../styles/gameboard-styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Option from "./Option";

const Gameboard = ({
  startTimer,
  setMoveCount,
  time,
  stopTimer,
  settings,
  playerTurn,
  setPlayerTurn,
  setScores,
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

      // if user finds a matching pair
      if (picked[0].value === picked[1].value) {
        // add to the matches array
        setMatches((prev) => [...prev, picked[0].index, picked[1].index]);
        setScores((prevScores) => {
          const prev = { ...prevScores };
          prev[playerTurn]++;
          return prev;
        });
      } else {
        if (settings.playerCount > 1) {
          setPlayerTurn(() => {
            if (playerTurn < settings.playerCount) {
              return playerTurn + 1;
            }
            return 1;
          });
        }
      }

      setMoveCount((prevCount) => prevCount + 1);
      return () => clearTimeout(timer);
    }
    if (matches.length > settings.boardSize - 2) {
      stopTimer();
      setMatches([]);
      setPicked([]);
      setBoard((prevBoard) => shuffleArray([...prevBoard]));
    }

    if (!time && picked.length > 0) {
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
      settings={settings}
    />
  ));

  return (
    <BoardContainer boardSize={settings.boardSize}>{choices}</BoardContainer>
  );
};
Gameboard.propTypes = {
  startTimer: PropTypes.func,
  setMoveCount: PropTypes.func,
  time: PropTypes.number,
  stopTimer: PropTypes.func,
  settings: PropTypes.object,
  playerTurn: PropTypes.number,
  setPlayerTurn: PropTypes.func,
  setScores: PropTypes.func,
};

export default Gameboard;
