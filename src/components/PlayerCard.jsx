import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 64px;
  height: 70px;
  background-color: ${(props) => (props.active ? "#FDA214" : "#DFE7EC")};
  color: ${(props) => (props.active ? "white" : "#7191A5")};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-family: Atkinson Hyperlegible, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  justify-content: space-evenly;
`;

const Score = styled.p`
  font-size: 24px;
`;
const PlayerCard = ({ number, score, playerTurn }) => {
  return (
    <Container active={number === playerTurn}>
      <h3>{`P${number}`}</h3>
      <Score>{score[number]}</Score>
    </Container>
  );
};

export default PlayerCard;

PlayerCard.propTypes = {
  number: PropTypes.number,
  score: PropTypes.object,
  playerTurn: PropTypes.number,
};
