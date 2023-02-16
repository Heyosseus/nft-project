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
          <LoginInput></LoginInput>
        </Form>
        <Form>
          <Label>Last Name</Label>
          <LoginInput></LoginInput>
        </Form>
        <Form>
          <Label>E-Mail*</Label>
          <LoginInput type="email"></LoginInput>
        </Form>
        <Form>
          <Label>Phone Number*</Label>
          <LoginInput type="tel"></LoginInput>
        </Form>
        <TextParagraph style={{ marginTop: 34 }}>
          Shipping Information
        </TextParagraph>
        <Form>
          <Label>Country*</Label>
          <LoginInput></LoginInput>
        </Form>
        <Form>
          <Label>Street, Number and Unit*</Label>
          <LoginInput></LoginInput>
        </Form>
        <Form>
          <Label>Additional Delivery Notes*</Label>
          <LoginInput></LoginInput>
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
`;
const TextParagraph = styled(Paragraph)`
  font-size: 20px;
  margin-top: 26px;
`;

const Form = styled.form`
  width: 345px;
  padding: 18px 30px 36px;
  background: #1c2135;
  border-radius: 20px;
  margin-top: 22px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
