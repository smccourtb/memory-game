import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  gap: 23px;
  width: 100%;
  @media (min-width: 768px) {
    padding: ${({ solo }) => solo && "0 74px"};
    gap: 30px;
  }
  @media (min-width: 1440px) {
    padding: ${({ solo }) => solo && "0 285px"};
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #dfe7ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-left: 21px;
    padding-right: 15px;
    justify-content: space-between;
    font-size: 18px;
    height: 72px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
  color: #7191a5;
`;

export const Value = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #304859;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const CurrentLabel = styled.small`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  letter-spacing: 5px;
  color: ${({ active }) => (active ? "#152938" : "white")};
  padding: 0 35px;
`;

export const PlayerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    gap: 23px;
  }
`;
