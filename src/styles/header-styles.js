import styled from "styled-components";
import { Restart, NewGame } from "./gameover-styles";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  @media (min-width: 768px) {
    height: 50px;
  }
`;

export const Img = styled.img`
  width: 92px;
  @media (min-width: 768px) {
    width: 154px;
  }
`;

export const MenuButton = styled.button`
  background-color: #fda214;
  color: #fcfcfc;
  border: none;
  border-radius: 2em;
  width: 78px;
  height: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  &:hover {
    background-color: #ffb84a;
  }
`;

export const MenuRestart = styled(Restart)`
  width: 149px;
  height: 52px;
`;

export const MenuNewGame = styled(NewGame)`
  width: 149px;
  height: 52px;
`;

export const ButtonGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 16px;
`;
