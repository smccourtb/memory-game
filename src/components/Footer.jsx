import {
  Container,
  DataContainer,
  Title,
  Value,
} from "../styles/footer-styles";
import PropTypes from "prop-types";
import PlayerCard from "./PlayerCard";

const Footer = ({ moveCount, time, settings, playerTurn, scores }) => {
  const players = () => {
    const cards = [];
    for (let i = 1; i < settings.playerCount + 1; i++) {
      cards.push(i);
    }
    return cards;
  };

  const playerCards = players().map((player) => (
    <PlayerCard
      key={player}
      number={player}
      playerTurn={playerTurn}
      score={scores}
    />
  ));

  return (
    <Container solo={settings.playerCount < 2}>
      {settings.playerCount < 2 ? (
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
        [playerCards]
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
