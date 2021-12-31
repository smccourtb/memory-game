import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ setup }) => (!setup ? "space-between" : `center`)};
  min-height: 100%;
  height: 100vh;
  padding: 24px;
  width: 100%;
  background-color: ${({ setup }) => (setup ? `#152938` : `white`)};
  filter: ${({ showMenu, complete }) =>
    (showMenu || complete) && `brightness(15%)`};
  z-index: 0;
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1440px) {
    padding: 40px 164px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 56px;
  }
`;
