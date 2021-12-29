import PropTypes from "prop-types";
import { Container, Score } from "../styles/playercard-styles";

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
