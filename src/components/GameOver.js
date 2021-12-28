import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: absolute;
  width: 327px;
  //height: 376px;
  background-color: darkgrey;
  top: 90px;
  left: 24px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px;
`;

const Header = styled.h2`
  font-size: 24px;
  color: black;
`;

const Message = styled.p`
  font-size: 14px;
  color: #7191a5;
`;

const StatContainer = styled.div`
  width: 270px;
  height: 48px;
  border-radius: 5px;
  background-color: ${({ winner }) => (winner ? "#152938" : "#dfe7ec")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
const DataLabel = styled.p`
  color: ${({ winner }) => (winner ? "white" : "#7191a5")};
  font-size: 13px;
`;
const DataValue = styled.p`
  font-size: 20px;
  color: ${({ winner }) => (winner ? "white" : "#black")};
`;
const Restart = styled.button`
  color: white;
  width: 279px;
  height: 48px;
  background-color: #fda214;
  border: none;
  outline: none;
  border-radius: 26px;
  font-size: 18px;
  font-weight: 700;
`;
const NewGame = styled.button`
  color: #304859;
  width: 279px;
  height: 48px;
  background-color: #dfe7ec;
  border: none;
  outline: none;
  border-radius: 26px;
  font-size: 18px;
  font-weight: 700;
`;
const GameOver = ({
  time,
  moveCount,
  restartGame,
  setSetup,
  scores,
  settings,
}) => {
  const determineHighestScore = () => {
    const highest = Object.values(scores);
    console.log(highest);
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

  const Players = () => {
    const playerData = sortPlayerRank();
    return playerData.map((player, idx) => (
      <StatContainer
        key={idx}
        winner={player.score === determineHighestScore()}
      >
        <DataLabel winner={player.score === determineHighestScore()}>
          Player {player.number}
        </DataLabel>
        <DataValue winner={player.score === determineHighestScore()}>
          {player.score} Pairs
        </DataValue>
      </StatContainer>
    ));
  };
  return (
    <Container>
      <Header>
        {settings.playerCount > 1
          ? `Player ${sortPlayerRank()[0].number} Wins!`
          : `You did it!`}
      </Header>
      <Message>
        {settings.playerCount > 1
          ? `Game over! Here are the results...`
          : `Game over! Heres how you got on...`}
      </Message>
      {settings.playerCount > 1 ? (
        [Players()]
      ) : (
        <>
          <StatContainer>
            <DataLabel>Time Elapsed</DataLabel>
            <DataValue>{time}</DataValue>
          </StatContainer>
          <StatContainer>
            <DataLabel>Moves Taken</DataLabel>
            <DataValue>{`${moveCount} Moves`}</DataValue>
          </StatContainer>
        </>
      )}
      <Restart onClick={restartGame}>Restart</Restart>
      <NewGame onClick={() => setSetup(true)}>Setup New Game</NewGame>
    </Container>
  );
};
export default GameOver;

GameOver.propTypes = {
  moveCount: PropTypes.number,
  time: PropTypes.string,
  restartGame: PropTypes.func,
  setSetup: PropTypes.func,
  scores: PropTypes.object,
  settings: PropTypes.object,
};
