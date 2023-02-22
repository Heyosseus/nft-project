import styled from 'styled-components';
import arrow from '../assets/dashboard/arrow.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
  align-items: center;
  @media (min-width: 678px) {
    padding: 22px 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Nav = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
    width: 10vh;
    align-items: flex-start;
  }
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
  @media (min-width: 678px) {
    width: 186px;
    height: 48px;
    font-size: 18px;
  }
`;

export const Circle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #5ed3d0;
  @media (min-width: 678px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
    padding-left: 2px;
  }
`;

export const Card = styled.div`
  width: 345px;
  background: #1c2135;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  align-items: center;
  padding-bottom: 18px;
  border-radius: 20px;
  @media (min-width: 678px) {
    width: 532px;
    display: flex;
    align-self: center;
    margin-top: 28px;
  }
  @media (min-width: 1024px) {
    width: 65vw;
    display: flex;
    flex-direction: row;
    margin-left: 44px;
    justify-content: space-around;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  width: 279px;
  margin-top: 18px;
  @media (min-width: 678px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    width: 404px;
    line-height: 48px;
    letter-spacing: 1px;
    text-align: left;
  }
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
  @media (min-width: 678px) {
    width: 152px;
    height: 134px;
  }
  @media (min-width: 1024px) {
    width: 156px;
    height: 148px;
  }
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
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    font-size: 24px;
    justify-content: flex-start;
  }
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
  @media (min-width: 678px) {
    margin-top: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 48px;
  }
`;
export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin-top: 8px;
  @media (min-width: 678px) {
    margin-top: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
export const NFTContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 24px;
  @media (min-width: 678px) {
    margin-top: 42px;
  }
`;
export const NFTCard = styled.div`
  width: 165px;
  border-radius: 40px;
  background: #1c2135;
  position: relative;
  @media (min-width: 1024px) {
    width: 196px;
    height: 224px;
  }
`;
export const NFTImage = styled.img`
  width: 153px;
  height: 163px;
  background-size: contain;
  @media (min-width: 1024px) {
    width: 186px;
    height: 190px;
  }
`;

export const NFTCaption = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  padding-bottom: 6px;
  z-index: 111;
`;
