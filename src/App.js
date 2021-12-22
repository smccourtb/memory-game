import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
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

// localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page

function App() {
  const [moveCount, setMoveCount] = useState(0);
  const [time, setTime] = useState(0);
  const [complete, setComplete] = useState(false);

  // #####################################################################//
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

  return (
    <Container>
      <FontStyles />
      <Header />
      <Gameboard
        time={formatTime(time)}
        startTimer={handleStart}
        setMoveCount={setMoveCount}
        stopTimer={handleStop}
      />
      <Footer
        moveCount={moveCount}
        time={formatTime(time)}
        complete={complete}
      />
    </Container>
  );
}

export default App;
