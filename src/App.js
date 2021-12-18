import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Footer from "./components/Footer";
import styled from "styled-components";
import FontStyles from "./fontStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <FontStyles />
      <Header />
      <Gameboard />
      <Footer />
    </Container>
  );
}

export default App;
