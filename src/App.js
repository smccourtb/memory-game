import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import styled from "styled-components";
import FontStyles from "./fontStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  height: 100%;
  width: 100%;
`;

// var startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
// localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page

// function startTimeCounter() {
//   var now = Math.floor(Date.now() / 1000); // get the time now
//   var diff = now - startTime; // diff in seconds between now and start
//   var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
//   var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
//   m = checkTime(m); // add a leading zero if it's single digit
//   s = checkTime(s); // add a leading zero if it's single digit
//   document.getElementById("idName").innerHTML = m + ":" + s; // update the element where the timer will appear
//   var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
// }

// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   } // add zero in front of numbers < 10
//   return i;
// }

// startTimeCounter();
function App() {
  return (
    <Container>
      <FontStyles />
      <Header />
      <Gameboard />
      <Footer />
    </Container>
  );
}

export default App;
