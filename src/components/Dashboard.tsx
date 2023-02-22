import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Images } from '../utils/Images';
import { NFTList } from '../utils/Images';
import busd from '../assets/dashboard/busd.png';
import Slider from 'react-slick';
import {
  Container,
  Arrow,
  CardImages,
  CardText,
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
import NavbarMenu from './menu/NavbarMenu';
import Aside from './aside/Aside';

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
      <Div
        style={{
          width: '3px',
          height: '3px',
          backgroundColor: 'white',
          borderRadius: '50%',
          margin: '0 5px 42px 5px',
        }}
      ></Div>
    );
  },
};

if (window.innerWidth >= 1024) {
  settings.slidesToShow = 5;
  settings.slidesToScroll = 3;
} else if (window.innerWidth >= 768) {
  settings.slidesToShow = 3;
  settings.slidesToScroll = 3;
} else {
  settings.slidesToShow = 2;
  settings.slidesToScroll = 2;
}

function Dashboard(): JSX.Element {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/upgrade');
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
                To start, select the NFT level you want
              </Heading>
              <CardText>
                Choose your NFT below <Arrow></Arrow>
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
          <Text>NFT Levels</Text>
          <Paragraph>Click on each to see more details.</Paragraph>
          <ForSlider>
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
          </ForSlider>
          <div>
            <WrapperForInfos>
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
            </WrapperForInfos>
            <WrapperForInfos>
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
            </WrapperForInfos>
          </div>
          <Identifier>
            <BUSD src={busd}></BUSD> = BUSD
          </Identifier>
          <LoginContainer>
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
          </LoginContainer>
          <LoginButton onClick={navigateHandler}>
            Get my NFT
          </LoginButton>
        </MiddleContent>
        <DisplayForDesktop>
          <Aside />
        </DisplayForDesktop>
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
  @media (min-width: 678px) {
    font-size: 22px;
    width: 90vw;
    margin-top: 24px;
  }
  @media (min-width: 1024px) {
    width: 30vw;
    height: 121px;
  }
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
  @media (min-width: 678px) {
    font-size: 18px;
    margin-top: 24px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const LoginCard = styled.div`
  width: 345px;
  padding: 14px 32px 32px 31px;
  display: flex;
  flex-direction: column;
  background: #1c2135;
  margin-top: 32px;
  border-radius: 20px;
  @media (min-width: 678px) {
    width: 336px;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 30vw;
    padding: 22px 44px;
  }
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
    transition: 0.1s all ease;
    outline: none;
  }
  @media (min-width: 1024px) {
   font-size: 18px;
    width: 425px;
    height: 50px;
  }
`;

export const LoginButton = styled(Button)`
  width: 190px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    
  }
`;

const LoginContainer = styled.div`
  @media (min-width: 678px) {
    display: flex;
    gap: 22px;
  }
`;

const Div = styled.div`
  @media (min-width: 678px) {
    display: flex;
    justify-content: center;
  }
`;

export const ForSlider = styled.div`
  width: 40vh;
  @media (min-width: 678px) {
    width: 50vh;
  }
  @media (min-width: 1024px) {
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
`;
export const Display = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const DisplayForDesktop = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75vw;
  }
`;

export const WrapperForInfos = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 22px;
  }
`;
