import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Arrow,
  Card,
  CardImages,
  CardText,
  Container,
  Heading,
  ImageContainer,
  ImageContainer2,
  Text,
} from '../../styles/DashBoardStyles';
import { Button } from '../../styles/HomeStyle';
import { Images } from '../../utils/Images';
import Aside from '../aside/Aside';
import {
  Display,
  DisplayForDesktop,
  HeaderContainer,
  MiddleContent,
} from '../Dashboard';
import NavbarMenu from '../menu/NavbarMenu';
import Navbar from '../navbar/Navbar';
function Referal() {
  const [isColored, setIsColored] = useState(false);

  const ButtonToggle = () => {
    setIsColored(!isColored);
  };
  return (
    <div>
      <Container>
        <Display>
          <Navbar />
        </Display>
        <DisplayForDesktop>
          <NavbarMenu />
        </DisplayForDesktop>
        <MiddleContent>
          <Card>
            <HeaderContainer>
              <Heading>
                Check your purchases and referrals’ history.
              </Heading>
              <CardText>
                Check here <Arrow></Arrow>
              </CardText>
            </HeaderContainer>
            <div>
            <ImageContainer>
              <CardImages src={Images.image1}></CardImages>
              <CardImages src={Images.image4}></CardImages>
            </ImageContainer>
            <ImageContainer2>
              <CardImages src={Images.image3}></CardImages>
              <CardImages src={Images.image2}></CardImages>
            </ImageContainer2>
            </div>
          </Card>
          <Text>History</Text>
          <BtnContainer>
            <ReferalButton
              color={isColored ? 'gradient' : 'solid'}
              onClick={ButtonToggle}
            >
              Newest
            </ReferalButton>
            <ReferalButton
              color={!isColored ? 'gradient' : 'solid'}
              onClick={ButtonToggle}
            >
              Oldest
            </ReferalButton>
          </BtnContainer>
        </MiddleContent>
        <DisplayForDesktop>
          <Aside />
        </DisplayForDesktop>
      </Container>
    </div>
  );
}

export default Referal;

const ReferalButton = styled.button`
  width: 113px;
  border-radius: 12px;
  background: ${(props) =>
    props.color === 'gradient'
      ? `linear-gradient(104.1deg, #89a2fb 0%, #8750f3 60.04%)`
      : '#1c2135'};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: none;
  height: 40px;
  @media (min-width: 678px) {
    width: 162px;
    height: 54px;
    font-size: 18px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 22px;
`;
