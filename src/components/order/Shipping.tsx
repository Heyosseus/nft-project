import styled from 'styled-components';
import {
  Arrow,
  Card,
  CardText,
  Container,
  Heading,
  Text,
} from '../../styles/DashBoardStyles';
import { Images } from '../../utils/Images';
import Navbar from '../navbar/Navbar';
import { CardImage } from '../Upgrade';

function Shipping() {
  return (
    <div>
      <Container>
        <Navbar />
        <Card>
          <Heading>Your NFC card will be with you soon!</Heading>
          <CardImage src={Images.danceNft}></CardImage>
          <CardText>
            Track below <Arrow></Arrow>
          </CardText>
        </Card>
        <Text>Card Shipment Status</Text>
        <ShippingCard>
          <Status>
            <Image src={Images.elipse}></Image>
            <Line src={Images.line}></Line>
            <Image2 src={Images.elipse}></Image2>
            <Line2></Line2>
          </Status>
          <ButtonContainer>
            <Wrapper>
              <Triangle src={Images.triangle}></Triangle>
              <ActiveButton>Order placed</ActiveButton>
            </Wrapper>
            <Wrapper>
              <Triangle src={Images.triangle}></Triangle>
              <ActiveButton>Processing</ActiveButton>
            </Wrapper>
            <Wrapper>
              <Triangle src={Images.trblack}></Triangle>
              <InactiveButton>Shipped</InactiveButton>
            </Wrapper>
            <Wrapper>
              <Triangle src={Images.trblack}></Triangle>
              <InactiveButton>Delivered</InactiveButton>
            </Wrapper>
          </ButtonContainer>
        </ShippingCard>
      </Container>
    </div>
  );
}

export default Shipping;

const ShippingCard = styled.div`
  display: flex;
  margin-top: 44px;
  justify-content: space-evenly;
  padding-bottom: 10vh;
  margin-top: 34px;
  
`;
const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
`;
const Line = styled.img`
  position: absolute;
  top: 10px;
`;

const Image2 = styled(Image)`
  position: absolute;
  top: 108px;
  z-index: 11;
`;

const Line2 = styled.div`
  background: #1c2135;
  position: absolute;
  top: 110px;
  width: 12px;
  height: 200px;
  border-radius: 10px;
  z-index: 0;
`;

const ActiveButton = styled.button`
  width: 183px;
  border-radius: 6px;
  background: #5ed3d0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c2135;
  border: none;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const InactiveButton = styled(ActiveButton)`
  background: #1c2135;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Triangle = styled.img`
  width: 20px;
  height: 22px;
  position: absolute;
  left: -13px;
`;
