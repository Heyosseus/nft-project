import React from 'react';
import styled from 'styled-components';
import { List } from 'phosphor-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/dashboard/iPhone 13/Group 1083.png';
import image2 from '../assets/dashboard/iPhone 13/Group 1084.png';
import image3 from '../assets/dashboard/iPhone 13/Group 1085.png';
import image4 from '../assets/dashboard/iPhone 13/Group 1086.png';
import arrow from '../assets/dashboard/arrow.png';
import aloe from '../assets/dashboard/AloeVera.png';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Dashboard(props: {
  defaultAccount: string | null;
}): JSX.Element {
  const { defaultAccount } = props;
  const shortAddress =
    defaultAccount &&
    `${defaultAccount.substring(
      0,
      2
    )}......${defaultAccount.substring(defaultAccount.length - 5)}`;

  return (
    <div>
      <Container>
        <Navbar>
          <List size={24} color="white" />
          <Address>
            {shortAddress} <Circle></Circle>
          </Address>
        </Navbar>
        <Card>
          <Heading>To start, select the NFT level you want</Heading>
          <ImageContainer>
            <CardImages src={image1}></CardImages>
            <CardImages src={image4}></CardImages>
          </ImageContainer>
          <ImageContainer2>
            <CardImages src={image3}></CardImages>
            <CardImages src={image2}></CardImages>
          </ImageContainer2>
          <CardText>
            Choose your NFT below <Arrow></Arrow>
          </CardText>
        </Card>
        <Text>NFT Levels</Text>
        <Paragraph>Click on each to see more details.</Paragraph>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div>
              <NFTCard>
                <NFTImage src={aloe}></NFTImage>
              </NFTCard>
            </div>
          </SwiperSlide>
        
        </Swiper>
      </Container>
    </div>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Address = styled.div`
  width: 146px;
  height: 44px;
  background: #1c2135;
  border-radius: 30px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
`;

const Circle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #5ed3d0;
`;

const Card = styled.div`
  width: 345px;
  background: #1c2135;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  align-items: center;
  padding-bottom: 16px;
  border-radius: 20px;
`;

const Heading = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  width: 279px;
  margin-top: 18px;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-left: 34px;
  margin-top: 8px;
`;

const ImageContainer2 = styled.div`
  display: flex;
  margin-right: 44px;
`;

const CardImages = styled.img`
  margin-left: 16px;
`;

const CardText = styled.div`
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

const Arrow = styled.div`
  background: url(${arrow});
  width: 30px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-top: 20px;
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
`;

const NFTCard = styled.div`
  width: 155px;
  border-radius: 40px;
  background: #1c2135;
`;
const NFTImage = styled.img``;
