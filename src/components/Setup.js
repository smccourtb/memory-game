import Logo from "../assets/logo.svg";
import styled from "styled-components";

const Menu = styled.div`
  width: 327px;
  height: 386px;
  background-color: #fcfcfc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Img = styled.svg`
  background-color: white;
  mask: url(${Logo}) no-repeat center;
  height: 40px;
  width: 150px;
`;

const Setup = () => {
  return (
    <Container>
      <Img />
      <Menu>
        <h3>Select Theme</h3>
        <button>Numbers</button>
        <button>Icons</button>
        <h3>Number of Players</h3>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <h3>Grid Size</h3>
        <button>4x4</button>
        <button>6x6</button>
        <button>Start Game</button>
      </Menu>
    </Container>
  );
};

export default Setup;
