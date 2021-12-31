import PropTypes from "prop-types";
import { Container, Score } from "../styles/playercard-styles";
import MediaQuery from "react-responsive";

const PlayerCard = ({ number, score, playerTurn }) => {
  return (
    <Container active={number === playerTurn}>
      <h3>
        <MediaQuery query="(max-width: 767px)">{`P${number}`}</MediaQuery>
        <MediaQuery query="(min-width: 768px)">{`Player ${number}`}</MediaQuery>
      </h3>
      <Score active={number === playerTurn}>{score[number]}</Score>
    </Container>
  );
};

export default PlayerCard;

PlayerCard.propTypes = {
  number: PropTypes.number,
  score: PropTypes.object,
  playerTurn: PropTypes.number,
};
