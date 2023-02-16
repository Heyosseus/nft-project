import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { List } from 'phosphor-react';
import { Images } from '../utils/Images';
import { NFTList } from '../utils/Images';
import busd from '../assets/dashboard/busd.png';
import Slider from 'react-slick';
import {
  Container,
  Address,
  Arrow,
  CardImages,
  CardText,
  Circle,
  Heading,
  ImageContainer,
  ImageContainer2,
  NFTCaption,
  NFTCard,
  NFTContainer,
  NFTImage,
  Paragraph,
  Text,
  Card,
} from '../styles/DashBoardStyles';
import { Button } from '../styles/HomeStyle';
import Navbar from './navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const images = NFTList;
export const captions = [
  'NFT Level 2',
  'NFT Level 3',
  'NFT Level 5',
  'NFT Level 7',
  'NFT Level 10',
];
export const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  customPaging: function () {
    return (
      <div
        style={{
          width: '3px',
          height: '3px',
          backgroundColor: 'white',
          borderRadius: '50%',
          margin: '0 5px 42px 5px',
        }}
      ></div>
    );
  },
};

function Dashboard(): JSX.Element {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/upgrade');
  };
  return (
    <div>
      <Container>
        <Navbar />
        <Card>
          <Heading>To start, select the NFT level you want</Heading>
          <ImageContainer>
            <CardImages src={Images.image1}></CardImages>
            <CardImages src={Images.image4}></CardImages>
          </ImageContainer>
          <ImageContainer2>
            <CardImages src={Images.image3}></CardImages>
            <CardImages src={Images.image2}></CardImages>
          </ImageContainer2>
          <CardText>
            Choose your NFT below <Arrow></Arrow>
          </CardText>
        </Card>
        <Text>NFT Levels</Text>
        <Paragraph>Click on each to see more details.</Paragraph>
        <Slider {...settings}>
          {images.map((image, index) => (
            <NFTContainer key={image}>
              <NFTCard>
                <NFTImage src={image} alt="slider-img" />
                <NFTCaption>{captions[index]}</NFTCaption>
              </NFTCard>
            </NFTContainer>
          ))}
        </Slider>
        <Infos>
          NFT Price
          <Price>
            <BUSD src={busd}></BUSD>
            10
          </Price>
        </Infos>
        <Infos>
          Multiplier
          <Price>0%</Price>
        </Infos>
        <Infos>
          NFT Delivery Fee
          <Price>
            <BUSD src={busd}></BUSD>
            10
          </Price>
        </Infos>
        <Infos>
          Total Price
          <Price>
            <BUSD src={busd}></BUSD>
            10
          </Price>
        </Infos>
        <Identifier>
          <BUSD src={busd}></BUSD> = BUSD
        </Identifier>
        <LoginCard>
          <LoginHeading>Choose a Username*</LoginHeading>
          <LoginText>
            *Once you set a username, you can’t change it.
          </LoginText>
          <LoginParagraph>
            You’ll use it to share with friends and earn rewards!
          </LoginParagraph>
          <LoginInput></LoginInput>
        </LoginCard>
        <LoginCard>
          <LoginHeading>Did you get invited to GPM?</LoginHeading>
          <LoginParagraph>
            If so, please enter your referrer’s username.
          </LoginParagraph>
          <LoginInput></LoginInput>
        </LoginCard>
        <LoginButton onClick={navigateHandler}>
          Get my NFT
        </LoginButton>
      </Container>
    </div>
  );
}

export default Dashboard;

export const Infos = styled.div`
  width: 345px;
  height: 78px;
  border-radius: 20px;
  background: #1c2135;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 14px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BUSD = styled.img`
  background-size: contain;
  width: 15px;
  height: 15px;
`;

export const Identifier = styled(Price)`
  margin-left: auto;
  margin-top: 15px;
`;

const LoginCard = styled.div`
  width: 345px;
  padding: 14px 32px 32px 31px;
  display: flex;
  flex-direction: column;
  background: #1c2135;
  margin-top: 32px;
  border-radius: 20px;
`;

const LoginHeading = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const LoginText = styled.p`
  font-size: 11px;
  opacity: 0.8;
`;
const LoginParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 14px;
`;
export const LoginInput = styled.input`
  width: 283px;
  height: 40px;
  border-radius: 12px;
  background: #091020;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 14px;
  margin-top: 16px;
  color: white;
  :hover {
    border: 2px solid #5ed3d0;
    transition: 0.2s all ease;
    outline: none;
  }
`;

export const LoginButton = styled(Button)`
  width: 190px;
  display: flex;
  align-self: center;
  justify-content: center;
  font-weight: 700;
`;
