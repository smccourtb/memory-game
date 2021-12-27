import PropTypes from "prop-types";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import styled from "styled-components";
import FontStyles from "./fontStyles";
import { useRef, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  height: 100%;
  width: 100%;
`;

function App({ settings, setSetup }) {
  const [moveCount, setMoveCount] = useState(0);
  const [time, setTime] = useState(0);
  const [complete, setComplete] = useState(false);
  const [reset, setReset] = useState(false);
  const countRef = useRef(null);

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
    <Container>
      <FontStyles />

      {complete && (
        <GameOver
          time={formatTime(time)}
          moveCount={moveCount}
          restartGame={restartGame}
          settings={settings}
          setSetup={setSetup}
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
      />
      <Footer
        moveCount={moveCount}
        time={formatTime(time)}
        complete={complete}
        settings={settings}
      />
    </Container>
  );
}

export default App;

App.propTypes = {
  settings: PropTypes.object,
  setSetup: PropTypes.func,
};
