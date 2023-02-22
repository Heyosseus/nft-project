import React from 'react';
import styled from 'styled-components';
import { BUSD, Identifier, Infos, Price } from '../Dashboard';
import busd from '../../assets/dashboard/busd.png';
import { Address, Circle } from '../../styles/DashBoardStyles';
import { Images, Icon } from '../../utils/Images';
import useLocalStorage from '../../hooks/useLocalStorage';

function Aside() {
  const [defaultAccount, setDefaultAccount] = useLocalStorage(
    'address',
    null
  );
  const shortAddress =
    defaultAccount &&
    `${defaultAccount.substring(
      0,
      2
    )}......${defaultAccount.substring(defaultAccount.length - 5)}`;

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Address>
          {shortAddress}
          <Circle>
            <img src={Images.circle} alt="address profile" />
          </Circle>
        </Address>
        <Logout>
          <LogoutIcon src={Icon.disconnect}></LogoutIcon>
        </Logout>
      </div>
      <Container>
        <Heading>No NFT</Heading>
        <Heading>Earnigns</Heading>
        <Content>
          Referrals <Price>0</Price>
        </Content>
        <Content>
          BUSD earned{' '}
          <Price>
            <BUSD src={busd}></BUSD> 0
          </Price>
        </Content>
        <Heading>NFT Level</Heading>
        <Content>
          Estimated value{' '}
          <Price>
            <BUSD src={busd}></BUSD> 0
          </Price>
        </Content>
        <Content>
          Current APY
          <Price>0%</Price>
        </Content>
        <Content>
          Tokens staked
          <Price>0 GPM</Price>
        </Content>
        <Content>
          My Earnings
          <Price>
            <BUSD src={busd}></BUSD> 0
          </Price>
        </Content>
        <Content>
          My affiliates
          <Price>0</Price>
        </Content>
        <Div>
          <BUSD src={busd}></BUSD> = BUSD
        </Div>
      </Container>
    </div>
  );
}

export default Aside;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 22px;
  background: #1c2135;
  border-radius: 24px;
  width: 345px;
  margin-top: 22px;
`;

const Heading = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 32px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
`;

const Content = styled.div`
  background: #1c2135;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin-top: 14px;
`;
const LogoutIcon = styled.img`
  width: 26px;
  height: 20px;
`;
const Logout = styled.div`
  background: #1c2135;
  width: 62px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
`;
