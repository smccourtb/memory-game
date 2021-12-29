import styled from "styled-components";

export const Container = styled.div`
  width: 64px;
  height: 70px;
  background-color: ${({ active }) => (active ? "#FDA214" : "#DFE7EC")};
  color: ${({ active }) => (active ? "white" : "#7191A5")};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;
  justify-content: space-evenly;
  position: relative;
  ${({ active }) =>
    active &&
    `&:before {
    content: " ";
    height: 0;
    position: absolute;
    width: 0;
    top -17px;
    border: 10px solid transparent;
    border-bottom-color: #FDA214;
    left: 31%;
  }`}
`;

export const Score = styled.p`
  font-size: 24px;
`;
