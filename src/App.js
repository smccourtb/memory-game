import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import Menu from "./components/Menu";
import Setup from "./components/Setup";

import { Container, Main, MenuContainer } from "./styles/app-styles";

import { useEffect, useRef, useState } from "react";

function App() {
  // solo only props
  const [moveCount, setMoveCount] = useState(0); // gameboard, footer
  const [time, setTime] = useState(0); // gameboard (to start the timer), footer (display the timer)
  const countRef = useRef(null); // used for the time
  // multiplayer only props
  const [playerTurn, setPlayerTurn] = useState(1); // gameboard (multi), footer
  const [scores, setScores] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 }); // gameboard, footer

  // indicates the game is over and to show the game over menu
  const [showGameOver, setShowGameOver] = useState(false);
  const [showSetup, setShowSetup] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // test
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
      restartGame();
      setReset(false);
    }
  }, [reset]);

  const [settings, setSettings] = useState({
    icon: "numbers",
    playerCount: 1,
    boardSize: 16,
  });

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
  };

  const formatTime = (timeToFormat) => {
    const getSeconds = `0${timeToFormat % 60}`.slice(-2);
    const minutes = `${Math.floor(timeToFormat / 60)}`;
    const getMinutes = `${minutes % 60}`.slice(-2);
    return `${getMinutes} : ${getSeconds}`;
  };

  const restartGame = () => {
    handleStop();
    setTime(0);
    setMoveCount(0);
    setScores({ 1: 0, 2: 0, 3: 0, 4: 0 });
    setPlayerTurn(1);
  };

  useEffect(() => {
    if (showMenu) {
      handleStop();
    } else {
      if (!reset) {
        handleStart();
      }
    }
  }, [showMenu]);
  return (
    <Main>
      <MenuContainer>
        {" "}
        {showGameOver && (
          <GameOver
            time={formatTime(time)}
            moveCount={moveCount}
            stopTimer={handleStop}
            settings={settings}
            setSetup={setShowSetup}
            scores={scores}
            setShowGameOver={setShowGameOver}
            setReset={setReset}
          />
        )}
        {showMenu && (
          <Menu
            setSetup={setShowSetup}
            setShowMenu={setShowMenu}
            setReset={setReset}
          />
        )}
      </MenuContainer>
      <Container setup={showSetup} complete={showGameOver} showMenu={showMenu}>
        {showSetup ? (
          <Setup
            setShowSetup={setShowSetup}
            setSettings={setSettings}
            settings={settings}
            setReset={setReset}
          />
        ) : (
          <>
            <Header
              setShowMenu={setShowMenu}
              setReset={setReset}
              setShowSetup={setShowSetup}
            />
            <Gameboard
              time={time}
              startTimer={handleStart}
              stopTimer={handleStop}
              setMoveCount={setMoveCount}
              settings={settings}
              setPlayerTurn={setPlayerTurn}
              playerTurn={playerTurn}
              setScores={setScores}
              reset={reset}
              setShowGameOver={setShowGameOver}
            />
            <Footer
              moveCount={moveCount}
              time={formatTime(time)}
              settings={settings}
              playerTurn={playerTurn}
              scores={scores}
            />
          </>
        )}
      </Container>
    </Main>
  );
}

export default App;
