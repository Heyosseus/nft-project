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
`;

export const Logo = styled.img`
  background-size: cover;
`;

export const Image = styled.img`
  background-size: cover;
  z-index: 1;
`;

export const Card = styled.div`
  background: #1c2135;
  border-radius: 20px;
  width: 284px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
  position: absolute;
  top: 65%;
  @media (min-width: 568px) {
    width: 535px;
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
    height:55px;
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
    margin:0 24px;
    width: 174px;
  
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
 
`;

export const Polygon2 = styled(Polygon)`
  transform: rotate(-200.61deg);
  position: absolute;
  top: 45%;
  left: 84%;
`;

export const Vector = styled(Polygon)`
  background-image: url(${vector});
  top: 35%;
  left: 13%;
`;

export const Vector2 = styled(Vector)`
  transform: rotate(-200.61deg);
  top: 58%;
  z-index: 111;
  left: 16%;
`;

export const Vector3 = styled(Vector)`
  transform: rotate(-100.61deg);
  top: 110%;
  z-index: 111;
  left: 86%;
`;

export const Elipse = styled(Polygon)`
  background-image: url(${elipse});
  position: absolute;
  top: 6%;
  left: 92%;
`;

export const Elipse2 = styled(Elipse)`
  width: 19px;
  height: 19px;
  top: 90%;
  left: 4%;
`;

export const Elipse3 = styled(Elipse)`
  width: 11px;
  height: 11px;
  top: 101%;
  left: 94%;
`;
