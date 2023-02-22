import styled from 'styled-components';
import button from '../assets/Home/sequence.png';
import polygon from '../assets/Home/Polygon.png';
import vector from '../assets/Home/Vector.png';
import elipse from '../assets/Home/Ellipse.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px;
  position: relative;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  background-size: cover;
`;

export const Image = styled.img`
  background-size: cover;
  z-index: 1;

  @media (min-width: 1024px) {
    position: absolute;
    top: 14vh;
    right: -330px;
    z-index: 111;
    width: 428px;
    height: 490px;
  }
`;

export const Card = styled.div`
  background: #1c2135;
  border-radius: 20px;
  width: 294px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
  position: absolute;
  top: 65%;
  @media (min-width: 568px) {
    width: 535px;
  }
  @media (min-width: 1024px) {
    width: 665px;
    /* height: 400px; */
    border-radius: 48px;
    position: absolute;
    top: 20vh;
    z-index: 11;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #fff;
  width: 191px;
  text-align: center;
  margin-top: 12px;
  @media (min-width: 568px) {
    font-size: 26px;
    width: 454px;
    margin-top: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
    width: 524px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(94.52deg, #5ed3d0 1.81%, #89a2fb 100%);
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 13px 31px;
  color: #1c2135;
  outline: none;
  border: none;
  margin-top: 24px;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 568px) {
    font-size: 18px;
    width: 210px;
    height: 55px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    width: 240px;
    height: 58px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
  width: calc(100% - 44px);
  justify-content: space-between;
  color: #89a2fb;
  font-size: 14px;
`;
export const Line = styled.div`
  height: 1px;
  background: #89a2fb;
  width: 90px;
  @media (min-width: 468px) {
    margin: 0 24px;
    width: 174px;
  }
  @media (min-width: 1024px) {
    margin: 0 44px;
    width: 204px;
  }
`;

export const Paragraph = styled.p`
  font-size: 11px;
  line-height: 17px;
  text-align: center;
  font-weight: 500px;
  color: white;
  opacity: 0.8;
  padding: 0 24px;
  margin-top: 34px;
  @media (min-width: 568px) {
    font-size: 14px;
    width: 449px;
  }
  @media (min-width: 1024px) {
    line-height: 22px;
  }
`;

export const SecondaryButton = styled.div`
  background-image: url(${button});
  width: 190px;
  height: 54px;
  margin-top: 22px;
  background-size: cover;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 568px) {
    font-size: 18px;
    width: 210px;
    height: 58px;
  }
  @media (min-width: 1024px) {
    width: 228px;
    height: 64px;
  }
`;

export const Polygon = styled.div`
  background-image: url(${polygon});
  width: 28px;
  height: 48px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 90%;
  left: 3%;
  @media (min-width: 1024px) {
    top: 30vh;
    left: 62vh;
    width: 55px;
    height: 40px;
    display: none;
  }
`;

export const Polygon2 = styled(Polygon)`
  transform: rotate(-200.61deg);
  position: absolute;
  top: 45%;
  left: 84%;
  @media (min-width: 1024px) {
    top: 20vh;
    left: 120vh;
    width: 140px;
    height: 55px;
    display: none;
  }
`;

export const Vector = styled(Polygon)`
  background-image: url(${vector});
  top: 35%;
  left: 13%;
  @media (min-width: 1024px) {
    top: 60vh;
    left: 80vh;
    width: 70px;
    height: 50px;
    display: none;
  }
`;

export const Vector2 = styled(Vector)`
  transform: rotate(-200.61deg);
  top: 58%;
  z-index: 111;
  left: 16%;
  @media (min-width: 1024px) {
    top: 20vh;
    left: 95vh;
    display: none;
  }
`;

export const Vector3 = styled(Vector)`
  transform: rotate(-100.61deg);
  top: 110%;
  z-index: 111;
  left: 86%;
  @media (min-width: 1024px) {
    top: 40vh;
    left: 140vh;
    width: 70px;
    height: 60px;
    display: none;
  }
`;

export const Elipse = styled.div`
  background-size: cover;
  background-image: url(${elipse});
  position: absolute;
  top: 6%;
  left: 92%;
  @media (min-width: 1024px) {
    width: 20px;
    height: 20px;
    left: -10%;
    top: 80%;
  }
`;

export const Elipse2 = styled(Elipse)`
  width: 19px;
  height: 19px;
  top: 90%;
  left: 4%;
  @media (min-width: 1024px) {
    width: 35px;
    height: 35px;
    top: 0;
  }
`;

export const Elipse3 = styled(Elipse)`
  width: 11px;
  height: 11px;
  top: 101%;
  left: 94%;
  @media (min-width: 1024px) {
    width: 25px;
    height: 25px;
    left: 80%;
  }
`;
