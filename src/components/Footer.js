import { Container, DataContainer, Title, Value } from "../styles/Footer";
import PropTypes from "prop-types";

const Footer = ({ moveCount }) => {
  return (
    <Container>
      <DataContainer role="time-container">
        <Title>Time</Title>
        <Value>1:53</Value>
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
};
export default Footer;
