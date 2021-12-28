import PropTypes from "prop-types";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import styled from "styled-components";
import FontStyles from "./fontStyles";
import { useRef, useState } from "react";
import Setup from "./components/Setup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  height: 100vh;
  padding: 24px;
  width: 100%;
  background-color: ${({ setup }) => setup && `#152938`};
`;

function App() {
  const [moveCount, setMoveCount] = useState(0);
  const [time, setTime] = useState(0);
  const [complete, setComplete] = useState(false);
  const [reset, setReset] = useState(false);
  const countRef = useRef(null);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const [setup, setSetup] = useState(true);
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
    setReset(true);
    setTime(0);
    setMoveCount(0);
    setComplete(false);
  };

  return (
    <Container setup={setup}>
      <FontStyles />
      {setup ? (
        <Setup
          setSetup={setSetup}
          setSettings={setSettings}
          settings={settings}
        />
      ) : (
        <>
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
          <Header restartGame={restartGame} setSetup={setSetup} />
          <Gameboard
            time={formatTime(time)}
            startTimer={handleStart}
            setMoveCount={setMoveCount}
            stopTimer={handleStop}
            reset={reset}
            settings={settings}
            setPlayerTurn={setPlayerTurn}
            playerTurn={playerTurn}
            setScores={setScores}
            scores={scores}
          />
          <Footer
            moveCount={moveCount}
            time={formatTime(time)}
            complete={complete}
            settings={settings}
            playerTurn={playerTurn}
            scores={scores}
          />
        </>
      )}
    </Container>
  );
}

export default App;

App.propTypes = {
  settings: PropTypes.object,
  setSetup: PropTypes.func,
};
