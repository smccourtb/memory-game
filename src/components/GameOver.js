import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: absolute;
  width: 327px;
  height: 376px;
  background-color: darkgrey;
  top: 90px;
  left: 24px;
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
  background-color: #dfe7ec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const DataLabel = styled.p`
  color: #7191a5;
  font-size: 13px;
`;

const DataValue = styled.p`
  font-size: 20px;
  color: black;
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
  font-family: Atkinson Hyperlegible;
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
  font-family: Atkinson Hyperlegible;
  font-weight: 700;
`;
const GameOver = ({ time, moveCount }) => (
  <Container>
    <Header>You did it!</Header>
    <Message>Game over! Here&apos;s how you got on...</Message>
    <StatContainer>
      <DataLabel>Time Elapsed</DataLabel>
      <DataValue>{time}</DataValue>
    </StatContainer>
    <StatContainer>
      <DataLabel>Moves Taken</DataLabel>
      <DataValue>{`${moveCount} Moves`}</DataValue>
    </StatContainer>
    <Restart>Restart</Restart>
    <NewGame>Setup New Game</NewGame>
  </Container>
);

export default GameOver;

GameOver.propTypes = {
  moveCount: PropTypes.number,
  time: PropTypes.string,
};
