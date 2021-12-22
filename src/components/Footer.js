import { Container, DataContainer, Title, Value } from "../styles/Footer";
import PropTypes from "prop-types";

const Footer = ({ moveCount, time }) => {
  return (
    <Container>
      <DataContainer role="time-container">
        <Title>Time</Title>
        <Value>{time}</Value>
      </DataContainer>
      <DataContainer role="moves-container">
        <Title>Moves</Title>
        <Value>{moveCount}</Value>
      </DataContainer>
    </Container>
  );
};
Footer.propTypes = {
  moveCount: PropTypes.number,
  time: PropTypes.string,
};
export default Footer;
