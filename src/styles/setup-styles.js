import styled from "styled-components";
import Logo from "../assets/logo.svg";

export const Menu = styled.div`
  width: 327px;
  height: 386px;
  background-color: #fcfcfc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const Img = styled.svg`
  background-color: white;
  mask: url(${Logo}) no-repeat center;
  height: 40px;
  width: 150px;
`;

export const Labels = styled.h3`
  font-size: 15px;
  color: #7191a5;
  font-weight: 700;
  align-self: flex-start;
`;

export const OptionButtons = styled.button`
  background-color: ${({ selected }) => (selected ? "#304859" : "#bcced9")};
  height: 40px;
  width: 50%;
  padding: 5px;
  border: none;
  border-radius: 24px;
  font-weight: 700;
  color: white;
  font-size: 16px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 24px;
  gap: 11px;
`;

export const NewGame = styled.button`
  color: white;
  width: 100%;
  height: 48px;
  background-color: #fda214;
  border: none;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 700;
`;
