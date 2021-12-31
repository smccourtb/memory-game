import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  gap: 23px;
  height: 70px;
  width: 100%;
  @media (min-width: 768px) {
    //width: 75%;
    padding: ${({ solo }) => solo && "0 74px"};
    gap: 30px;
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
