import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  height: 100vh;
  padding: 24px;
  width: 100%;
  background-color: ${({ setup }) => (setup ? `#152938` : `white`)};
  filter: ${(props) => (props.showMenu || props.complete) && `brightness(15%)`};
  z-index: -1;
  @media (min-width: 768px) {
    padding: 40px;
  }
`;
