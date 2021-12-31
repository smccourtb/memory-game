import styled from "styled-components/macro";
import Logo from "../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 45px;
  @media (min-width: 768px) {
    gap: 78px;
  }
`;

export const Img = styled.svg`
  background-color: white;
  mask: url(${Logo}) no-repeat center;
  height: 40px;
  width: 150px;
`;

export const Menu = styled.div`
  width: 100%;
  background-color: #fcfcfc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 24px;
  @media (min-width: 768px) {
    gap: 32px;
    padding: 56px;
    max-width: 654px;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Labels = styled.h3`
  font-size: 15px;
  color: #7191a5;
  font-weight: 700;
  align-self: flex-start;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const OptionButtons = styled.button`
  background-color: ${({ selected }) => (selected ? "#304859" : "#bcced9")};
  height: 40px;
  width: 50%;
  border: none;
  border-radius: 24px;
  font-weight: 700;
  color: white;
  font-size: 16px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 26px;
    height: 52px;
  }

  &:hover {
    background-color: ${({ selected }) => (selected ? "#304859" : "#6395b8")};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 11px;
  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export const StartGame = styled.button`
  color: white;
  width: 100%;
  height: 48px;
  background-color: #fda214;
  border: none;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 700;
  @media (min-width: 768px) {
    height: 70px;
    font-size: 32px;
  }

  &:hover {
    background-color: #ffb84a;
  }

  //  this can is the same as Restart in gameover-styles
`;
