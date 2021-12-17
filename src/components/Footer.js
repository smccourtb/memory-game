import { Container, DataContainer, Title, Value } from "../styles/Footer";

const Footer = () => {
  return (
    <Container>
      <DataContainer>
        <Title>Time</Title>
        <Value>1:53</Value>
      </DataContainer>
      <DataContainer>
        <Title>Moves</Title>
        <Value>39</Value>
      </DataContainer>
    </Container>
  );
};

export default Footer;
