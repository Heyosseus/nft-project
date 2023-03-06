import styled from 'styled-components';
import {
  Arrow,
  Card,
  CardText,
  Container,
  Heading,
  Text,
} from '../../styles/DashBoardStyles';
import { Images, StatusShipping } from '../../utils/Images';
import Aside from '../aside/Aside';
import {
  Display,
  DisplayForDesktop,
  MiddleContent,
} from '../Dashboard';
import NavbarMenu from '../menu/NavbarMenu';
import Navbar from '../navbar/Navbar';
import { CardImage } from '../Upgrade';

function Shipping() {
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
        </MiddleContent>
        <DisplayForDesktop>
          <Aside />
        </DisplayForDesktop>
      </Container>
    </div>
  );
}

export default Shipping;

const ShippingCard = styled.div`
  display: flex;
  margin-top: 44px;
  padding-bottom: 10vh;
  margin-top: 34px;
  width: 310px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 520px;
    margin-top: 104px;
  }
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
  @media (min-width: 1024px) {
    height: 130px;
    z-index: 2;
    margin-left: 0.5px;
  }
`;

const Image2 = styled(Image)`
  position: absolute;
  top: 108px;
  z-index: 11;
  @media (min-width: 1024px) {
    top: 130px;
  }
`;

const Line2 = styled.div`
  background: #1c2135;
  position: absolute;
  top: 110px;
  width: 12px;
  height: 200px;
  border-radius: 10px;
  z-index: 0;
  @media (min-width: 1024px) {
    height: 234px;
  }
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
  @media (min-width: 1024px) {
    width: 322px;
    height: 54px;
    font-size: 18px;
    letter-spacing: 0.6px;
  }
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
