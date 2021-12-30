import styled from "styled-components/macro";

export const Container = styled.div`
  position: absolute;
  width: 327px;
  background-color: white;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 33%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px;
  z-index: 1;
  border-radius: 10px;
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
