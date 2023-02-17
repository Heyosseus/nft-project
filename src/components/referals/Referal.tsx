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
import Navbar from '../navbar/Navbar';
function Referal() {
  const [isColored, setIsColored] = useState(false);

  const ButtonToggle = () => {
    setIsColored(!isColored);
  };
  return (
    <div>
      <Container>
        <Navbar />
        <Card>
          <Heading>
            Check your purchases and referrals’ history.
          </Heading>
          <ImageContainer>
            <CardImages src={Images.image1}></CardImages>
            <CardImages src={Images.image4}></CardImages>
          </ImageContainer>
          <ImageContainer2>
            <CardImages src={Images.image3}></CardImages>
            <CardImages src={Images.image2}></CardImages>
          </ImageContainer2>
          <CardText>
            Check here <Arrow></Arrow>
          </CardText>
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
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 22px;
`;
