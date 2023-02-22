import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/DashBoardStyles';
import { Icon, Flag } from '../../utils/Images';
function Menu() {
  const navigate = useNavigate();

  const handleMenuClose = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <CloseIcon
            src={Icon.close}
            onClick={handleMenuClose}
          ></CloseIcon>
          <Title src={Icon.title} alt="" />
        </Header>
        <Content>
          <MenuCard onClick={() => navigate('/dashboard')}>
            <div style={{ width: 30 }}>
              <HomeIcon src={Icon.home}></HomeIcon>
            </div>
            <div>
              <Text>Dashoard</Text>
            </div>
          </MenuCard>
          <MenuCard onClick={() => navigate('/referal')}>
            <div style={{ width: 30 }}>
              <Icons src={Icon.affiliate}></Icons>
            </div>
            <Text>Affiliates</Text>
          </MenuCard>
          <MenuCard>
            <div style={{ width: 30 }}>
              <ProfileIcon src={Icon.profile}></ProfileIcon>
            </div>
            <Text>My Profile</Text>
          </MenuCard>
          <MenuCard onClick={() => navigate('/upgrade')}>
            <div style={{ width: 30 }}>
              <HomeIcon src={Icon.card}></HomeIcon>
            </div>
            <Text>My Cards</Text>
          </MenuCard>
          <MenuCard>
            <div style={{ width: 30 }}>
              <Icons src={Icon.disconnect}></Icons>
            </div>
            <Text>Disconnect</Text>
          </MenuCard>
        </Content>
        <Flags>
          <FlagIconBrtn src={Flag.britain}></FlagIconBrtn>
          <FlagIcon src={Flag.france}></FlagIcon>
          <FlagIcon src={Flag.spain}></FlagIcon>
        </Flags>
      </Container>
    </Wrapper>
  );
}

export default Menu;

const Wrapper = styled.div`
  background: #1c2135;
  min-height: 100vh;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(50px);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 678px) {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin-top: 32px;
  }
`;

export const Icons = styled.img`
  width: 18px;
  height: 16px;
`;

const CloseIcon = styled.img`
  width: 22px;
  height: 18px;
`;
export const HomeIcon = styled.img`
  width: 15px;
  height: 16px;
`;
export const ProfileIcon = styled.img`
  width: 19px;
  height: 13px;
  margin-right: 6px;
`;

export const MenuCard = styled.div`
  display: flex;
  gap: 42px;
  height: 54px;
  align-items: center;
  padding: 0 27px;
  background: #091020cc;
  margin-top: 16px;
  border-radius: 12px;
  width: 90vw;
  @media (min-width: 678px) {
    display: flex;
    height: 64px;
    justify-content: space-between;
    padding: 0 44px;
    width: 80vw;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  align-items: flex-start;
  @media (min-width: 678px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  margin-top: 44px;
  position: relative;
`;

export const Title = styled.img`
  width: 106px;
  height: 25px;
  @media (min-width: 678px) {
    width: 168px;
    height: 38px;
  }
`;

export const Flags = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 42px;
  position: absolute;
  bottom: 10px;
  width: 320px;
  @media (min-width: 678px) {
    width: 90vw;
  }
`;

export const FlagIcon = styled.img`
  width: 52px;
  height: 41px;
  @media (min-width: 678px) {
    width: 62px;
    height: 56px;
  }
`;

export const FlagIconBrtn = styled.img`
  width: 62px;
  height: 56px;
  @media (min-width: 678px) {
    width: 86px;
    height: 76px;
  }
`;
