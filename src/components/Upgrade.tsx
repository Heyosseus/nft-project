import React from 'react';
import styled from 'styled-components';
import {
  Card,
  Container,
  Heading,
  Text,
  Paragraph,
  NFTContainer,
  NFTCaption,
  NFTCard,
  NFTImage,
} from '../styles/DashBoardStyles';
import Navbar from './navbar/Navbar';
import { Images, NFTList } from '../utils/Images';
import { Button } from '../styles/HomeStyle';
import Slider from 'react-slick';
import {
  settings,
  captions,
  Infos,
  Price,
  BUSD,
  Identifier,
  LoginButton,
} from './Dashboard';
import busd from '../assets/dashboard/busd.png';
import { useNavigate } from 'react-router-dom';

const images = NFTList;
const styles: any = ['luminosity', '', 'luminosity', '', ''];
const bg: any = [
  '',
  `linear-gradient(94.52deg, #5ed3d0 1.81%, #89a2fb 100%)`,
  '',
  `linear-gradient(104.1deg, #89A2FB 0%, #8750F3 60.04%)`,
  '',
];
function Upgrade(props: any) {
  const { defaultAccount } = props;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/order');
  };
  return (
    <div>
      <Container>
        <Navbar />
        <Card>
          <Heading>Get your NFT printed on an NFC card!</Heading>
          <CardImage src={Images.danceNft}></CardImage>
          <CardButton onClick={navigateHandler}>Order Now</CardButton>
        </Card>
        <Text>Upgrade your NFT.</Text>
        <Paragraph>
          You can only upgrade for a higher level NFT. Click on each
          to see more details.
        </Paragraph>
        <div style={{ width: '100%' }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <NFTContainer key={image}>
                <NFTCard style={{ background: `${bg[index]}` }}>
                  <NFTImage
                    src={image}
                    alt="slider-img"
                    style={{ mixBlendMode: styles[index] }}
                  />
                  <NFTCaption>{captions[index]}</NFTCaption>
                </NFTCard>
              </NFTContainer>
            ))}
          </Slider>
        </div>
        <Infos>
          My current NFT
          <Price>
            <BUSD src={busd}></BUSD>
            485
          </Price>
        </Infos>
        <Infos>
          Multiplier
          <Price>200%</Price>
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
        <LoginButton>Upgrade</LoginButton>
      </Container>
    </div>
  );
}

export default Upgrade;

export const CardImage = styled.img`
  width: 268px;
  height: 245px;
`;
export const CardButton = styled(Button)`
  margin-top: 0;
`;
