import styled from "styled-components/macro";

export const MenuContainer = styled.div`
  background-color: white;
  gap: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px;
  z-index: 1;
  border-radius: 10px;
  width: 100%;
`;

export const Header = styled.h2`
  font-size: 24px;
  color: black;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #7191a5;
`;

export const StatContainer = styled.div`
  width: 270px;
  height: 48px;
  border-radius: 5px;
  background-color: ${({ winner }) => (winner ? "#152938" : "#dfe7ec")};
  color: ${({ winner }) => (winner ? "white" : "#7191a5")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const DataLabel = styled.p`
  font-size: 13px;
`;

export const DataValue = styled.p`
  font-size: 20px;
`;

export const Restart = styled.button`
  color: white;
  width: 100%;
  height: 48px;
  background-color: #fda214;
  border: none;
  border-radius: 26px;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background-color: #ffb84a;
  }
`;

export const NewGame = styled.button`
  color: #304859;
  width: 100%;
  height: 48px;
  background-color: #dfe7ec;
  border: none;
  border-radius: 26px;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background-color: #6395b8;
    color: white;
  }
`;

export const WinText = styled.header`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-top: 9px;
`;

export const StatGroup = styled.main`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
