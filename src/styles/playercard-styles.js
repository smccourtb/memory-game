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
`;

export const Score = styled.p`
  font-size: 24px;
`;
