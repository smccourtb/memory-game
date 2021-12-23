import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: absolute;
  width: 75%;
  height: 75%;
  background-color: white;
  top: 5em;
`;

const GameOver = ({ time, moveCount }) => (
  <Container>
    <h2>You did it!</h2>
    <p>Game over! Here&apos;s how you got on...</p>
    <div>
      <p>Time Elapsed</p>
      <p>{time}</p>
    </div>
    <div>
      <p>Moves Taken</p>
      <p>{moveCount}</p>
    </div>
    <button>Restart</button>
    <button>Setup New Game</button>
  </Container>
);

export default GameOver;

GameOver.propTypes = {
  moveCount: PropTypes.number,
  time: PropTypes.string,
};
