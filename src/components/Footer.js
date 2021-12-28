import { Container, DataContainer, Title, Value } from "../styles/Footer";
import PropTypes from "prop-types";
import PlayerCard from "./PlayerCard";

const Footer = ({ moveCount, time, settings, playerTurn, scores }) => {
  const players = () => {
    const cards = [];
    for (let i = 1; i < settings.playerCount + 1; i++) {
      cards.push(
        <PlayerCard number={i} playerTurn={playerTurn} score={scores} />
      );
    }
    return cards;
  };
  return (
    <Container>
      {settings.playerCount < 1 ? (
        <>
          <DataContainer role="time-container">
            <Title>Time</Title>
            <Value>{time}</Value>
          </DataContainer>
          <DataContainer role="moves-container">
            <Title>Moves</Title>
            <Value>{moveCount}</Value>
          </DataContainer>
        </>
      ) : (
        [players()]
      )}
    </Container>
  );
};

Footer.propTypes = {
  moveCount: PropTypes.number,
  time: PropTypes.string,
  settings: PropTypes.object,
  playerTurn: PropTypes.number,
  scores: PropTypes.object,
};
export default Footer;
