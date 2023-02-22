import React from 'react';
import Menu, {
  Content,
  HomeIcon,
  Icons,
  ProfileIcon,
  Title,
} from './Menu';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Flag } from '../../utils/Images';
import logo from '../../assets/menu/logo.png';

function NavbarMenu() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Content>
        <Logo src={logo}></Logo>
        <EachIcon onClick={() => navigate('/dashboard')}>
          <HomeIcon src={Icon.home}></HomeIcon>
        </EachIcon>
        <EachIcon onClick={() => navigate('/referal')}>
          <Icons src={Icon.affiliate}></Icons>
        </EachIcon>
        <EachIcon>
          <ProfileIcon src={Icon.profile}></ProfileIcon>
        </EachIcon>
        <EachIcon onClick={() => navigate('/upgrade')}>
          <HomeIcon src={Icon.card}></HomeIcon>
        </EachIcon>
      </Content>
    </Wrapper>
  );
}

export default NavbarMenu;

const Wrapper = styled.div`
  background: #1c2135;
  border-radius: 20px;
  width: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EachIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  margin-bottom: 22px;
  padding-left: 2px;
  background: #898fa725;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  cursor: pointer;
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  padding-left: 2px;
  width: 50px;
  height: 46px;
  cursor: pointer;
`;

