import React from 'react';
import {
  Arrow,
  Card,
  CardText,
  Container,
  Heading,
  Paragraph,
  Text,
} from '../../styles/DashBoardStyles';
import Navbar from '../navbar/Navbar';
import { Images } from '../../utils/Images';
import {  CardImage } from '../Upgrade';
import styled from 'styled-components';
import { LoginButton, LoginInput } from '../Dashboard';
import { useNavigate } from 'react-router-dom';

function Order() {
   const navigate = useNavigate();
   const navigateHandler = () => {
     navigate('/shipping');
   };
  return (
    <div>
      <Container>
        <Navbar />
        <Card>
          <Heading>
            You’re just a few steps away from your card!
          </Heading>
          <CardImage src={Images.danceNft}></CardImage>
          <CardText>
            Order now <Arrow></Arrow>
          </CardText>
        </Card>
        <Textorder>Order your NFT Level 5 card</Textorder>
        <TextParagraph>Personal Information</TextParagraph>
        <Form>
          <Label>First Name</Label>
          <Inputs></Inputs>
        </Form>
        <Form>
          <Label>Last Name</Label>
          <Inputs></Inputs>
        </Form>
        <Form>
          <Label>E-Mail*</Label>
          <Inputs type="email"></Inputs>
        </Form>
        <Form>
          <Label>Phone Number*</Label>
          <Inputs type="tel"></Inputs>
        </Form>
        <TextParagraph style={{ marginTop: 34 }}>
          Shipping Information
        </TextParagraph>
        <Form>
          <Label>Country*</Label>
          <Inputs></Inputs>
        </Form>
        <Form>
          <Label>Street, Number and Unit*</Label>
          <Inputs></Inputs>
        </Form>
        <Form>
          <Label>Additional Delivery Notes*</Label>
          <Inputs></Inputs>
        </Form>
        <LoginButton onClick={navigateHandler}>Order Now</LoginButton>
      </Container>
    </div>
  );
}

export default Order;

const Textorder = styled(Text)`
  color: #8750f3;
  margin-top: 34px;
  @media (min-width: 768px) {
    font-size: 32px;
    margin-top: 44px;
  }
`;
const TextParagraph = styled(Paragraph)`
  font-size: 20px;
  margin-top: 26px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 36px;
  }
`;

const Form = styled.form`
  width: 345px;
  padding: 18px 30px 36px;
  background: #1c2135;
  border-radius: 20px;
  margin-top: 22px;
  @media (min-width: 768px) {
    width: calc(100vw - 84px);
    display: flex;
    flex-direction: column;
    height: 152px;
    justify-content: space-between;
    margin-top: 34px;
  }
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 20px;
    align-self: center;
  }
`;

const Inputs = styled(LoginInput)`
  @media (min-width: 768px) {
    width: 65vw;
    align-self: center;
    height: 44px;
  }
`;

