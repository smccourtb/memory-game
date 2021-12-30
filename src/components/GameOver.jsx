import PropTypes from "prop-types";
import {
  StatContainer,
  DataLabel,
  DataValue,
  MenuContainer,
  Restart,
  NewGame,
  Header,
  Message,
  WinText,
  StatGroup,
  ButtonContainer,
} from "../styles/gameover-styles";

const GameOver = ({
  time,
  moveCount,
  setSetup,
  scores,
  settings,
  setReset,
  setShowGameOver,
}) => {
  const determineHighestScore = () => {
    const highest = Object.values(scores);
    return Math.max(...highest);
  };

  const sortPlayerRank = () => {
    let playerScores = Object.values(scores);
    let players = [];
    for (let i = 0; i < playerScores.length; i++) {
      players.push({ number: i + 1, score: playerScores[i] });
    }
    players.sort((a, b) => (a.score < b.score ? 1 : -1));
    return players;
  };

  const checkForTie = () => {
    const playerScores = Object.values(sortPlayerRank());
    const results = playerScores.filter(
      (score) => score.score === playerScores[0].score
    );
    return results.length > 1;
  };

  const Players = () => {
    const playerData = sortPlayerRank();
    const highScore = determineHighestScore();
    return playerData.map((player, idx) => (
      <StatContainer key={idx} winner={player.score === highScore}>
        <DataLabel>
          Player {player.number} {player.score === highScore && "(Winner!)"}
        </DataLabel>
        <DataValue>{player.score} Pairs</DataValue>
      </StatContainer>
    ));
  };

  return (
    <MenuContainer>
      <WinText>
        <Header>
          {checkForTie()
            ? "It's a tie!"
            : settings.playerCount > 1
            ? `Player ${sortPlayerRank()[0].number} Wins!`
            : `You did it!`}
        </Header>
        <Message>
          {settings.playerCount > 1
            ? `Game over! Here are the results...`
            : `Game over! Here's how you got on...`}
        </Message>
      </WinText>
      {settings.playerCount > 1 ? (
        <StatGroup>{[Players()]}</StatGroup>
      ) : (
        <StatGroup>
          <StatContainer>
            <DataLabel>Time Elapsed</DataLabel>
            <DataValue>{time}</DataValue>
          </StatContainer>
          <StatContainer>
            <DataLabel>Moves Taken</DataLabel>
            <DataValue>{`${moveCount} Moves`}</DataValue>
          </StatContainer>
        </StatGroup>
      )}
      <ButtonContainer>
        <Restart
          onClick={() => {
            setReset(true);
            setShowGameOver(false);
          }}
        >
          Restart
        </Restart>
        <NewGame
          onClick={() => {
            setShowGameOver(false);
            setSetup(true);
            setReset(true);
          }}
        >
          Setup New Game
        </NewGame>
      </ButtonContainer>
    </MenuContainer>
  );
};

export default GameOver;

GameOver.propTypes = {
  moveCount: PropTypes.number,
  time: PropTypes.string,
  setReset: PropTypes.func,
  setSetup: PropTypes.func,
  scores: PropTypes.object,
  settings: PropTypes.object,
  setShowGameOver: PropTypes.func,
};
