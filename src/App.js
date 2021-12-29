import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import Menu from "./components/Menu";
import Setup from "./components/Setup";

import FontStyles from "./fontStyles";
import { Container } from "./styles/app-styles";

import { useRef, useState } from "react";

function App() {
  // solo only props
  const [moveCount, setMoveCount] = useState(0);
  const [time, setTime] = useState(0);
  const countRef = useRef(null);
  // multiplayer only props
  const [playerTurn, setPlayerTurn] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });

  // indicates the game is over and to show the game over menu
  const [complete, setComplete] = useState(false);

  const [setup, setSetup] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

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
    setComplete(true);
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
    setComplete(false);
  };

  return (
    <>
      <FontStyles />
      {complete && (
        <GameOver
          time={formatTime(time)}
          moveCount={moveCount}
          restartGame={restartGame}
          settings={settings}
          setSetup={setSetup}
          scores={scores}
        />
      )}
      {showMenu && (
        <Menu
          setSetup={setSetup}
          restartGame={restartGame}
          setShowMenu={setShowMenu}
        />
      )}
      <Container setup={setup} complete={complete} showMenu={showMenu}>
        {setup ? (
          <>
            <FontStyles />

            <Setup
              setSetup={setSetup}
              setSettings={setSettings}
              settings={settings}
            />
          </>
        ) : (
          <>
            <Header setShowMenu={setShowMenu} />
            <Gameboard
              time={time}
              startTimer={handleStart}
              setMoveCount={setMoveCount}
              stopTimer={handleStop}
              settings={settings}
              setPlayerTurn={setPlayerTurn}
              playerTurn={playerTurn}
              setScores={setScores}
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
    </>
  );
}

export default App;
