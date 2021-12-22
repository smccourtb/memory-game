import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import styled from "styled-components";
import FontStyles from "./fontStyles";
import { useState } from "react";

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
  const [time, setTime] = useState("0:00");

  const startTimer = () => {
    const startTime = Math.floor(Date.now() / 1000); // Get the starting time (right now) in seconds
    updateTime(startTime); // set a timeout to update the timer
  };

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  };

  const updateTime = (startTime) => {
    const now = Math.floor(Date.now() / 1000); // get the time now
    const diff = now - startTime; // diff in seconds between now and start
    const m = Math.floor(diff / 60); // get minutes value (quotient of diff)
    let s = Math.floor(diff % 60); // get seconds value (remainder of diff)
    s = checkTime(s); // add a leading zero if it's single digit
    setTime(m + ":" + s); // update time for footer display
    setTimeout(() => updateTime(startTime), 500); // set a timeout to update the timer
  };

  return (
    <Container>
      <FontStyles />
      <Header />
      <Gameboard
        time={time}
        startTimer={startTimer}
        setMoveCount={setMoveCount}
      />
      <Footer moveCount={moveCount} time={time} />
    </Container>
  );
}

export default App;
