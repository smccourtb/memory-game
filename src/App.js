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

const startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
// localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page

function startTimer() {
  const now = Math.floor(Date.now() / 1000); // get the time now
  const diff = now - startTime; // diff in seconds between now and start
  let m = Math.floor(diff / 60); // get minutes value (quotient of diff)
  let s = Math.floor(diff % 60); // get seconds value (remainder of diff)
  m = checkTime(m); // add a leading zero if it's single digit
  s = checkTime(s); // add a leading zero if it's single digit
  console.log(m + ":" + s);
  setTimeout(startTimer, 500); // set a timeout to update the timer
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function App() {
  const [moveCount, setMoveCount] = useState(0);

  return (
    <Container>
      <FontStyles />
      <Header />
      <Gameboard test={startTimer} setMoveCount={setMoveCount} />
      <Footer moveCount={moveCount} />
    </Container>
  );
}

export default App;
