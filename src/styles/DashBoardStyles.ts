import styled from "styled-components";
import arrow from '../assets/dashboard/arrow.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Address = styled.div`
  width: 146px;
  height: 44px;
  background: #1c2135;
  border-radius: 30px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
`;

export const Circle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #5ed3d0;
`;

export const Card = styled.div`
  width: 345px;
  background: #1c2135;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  align-items: center;
  padding-bottom: 16px;
  border-radius: 20px;
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  width: 279px;
  margin-top: 18px;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-left: 34px;
  margin-top: 8px;
`;

export const ImageContainer2 = styled.div`
  display: flex;
  margin-right: 44px;
`;

export const CardImages = styled.img`
  margin-left: 16px;
`;

export const CardText = styled.div`
  background: linear-gradient(
    91.63deg,
    #5ed3d0 1.38%,
    #a188f5 73.06%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  margin-top: 18px;
  display: flex;
`;

export const Arrow = styled.div`
  background: url(${arrow});
  width: 30px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-top: 20px;
`;
export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-top: 8px;
`;
export const NFTContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 24px;
`;
export const NFTCard = styled.div`
  width: 165px;
  border-radius: 40px;
  background: #1c2135;
  position: relative;
`;
export const NFTImage = styled.img`
  width: 153px;
  height: 163px;
  background-size: contain;
`;

export const NFTCaption = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  padding-bottom: 6px;
  z-index: 111;
`;