import {
  Container,
  DataContainer,
  Title,
  Value,
  PlayerCardContainer,
  CurrentLabel,
} from "../styles/footer-styles";
import PropTypes from "prop-types";
import PlayerCard from "./PlayerCard";
import MediaQuery from "react-responsive";

const Footer = ({ moveCount, time, settings, playerTurn, scores }) => {
  const players = () => {
    const cards = [];
    for (let i = 1; i < settings.playerCount + 1; i++) {
      cards.push(i);
    }
    return cards;
  };

  const playerCards = players().map((player) => (
    <PlayerCardContainer key={player} active={player === playerTurn}>
      <PlayerCard number={player} playerTurn={playerTurn} score={scores} />
      <CurrentLabel active={player === playerTurn}>
        <MediaQuery query="(min-width: 1440px)">CURRENT TURN</MediaQuery>
      </CurrentLabel>
    </PlayerCardContainer>
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
