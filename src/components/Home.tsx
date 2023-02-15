import { useState } from 'react';
import logo from '../assets/Home/gopop.png';
import image from '../assets/Home/connect-wallet-home.png';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Button,
  Card,
  Elipse,
  Elipse2,
  Elipse3,
  Image,
  Line,
  Logo,
  Paragraph,
  Polygon,
  Polygon2,
  SecondaryButton,
  Title,
  Vector,
  Vector2,
  Vector3,
  Wrapper,
} from '../styles/HomeStyle';

declare global {
  interface Window {
    ethereum?: any;
  }
}

function Home(props: any) {
  const {
    defaultAccount,
    setDefaultAccount,
    userBalance,
    setUserBalance,
    connButtonText,
    setConnButtonText,
  } = props;
  const navigate = useNavigate();

  // connect wallet
  const connectWalletHandler = (): void => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result: any) => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
          getAccountBalance(result[0]);
          navigate('/dashboard');
        })
        .catch((error: any) => {
          console.error(error);
        });
    } else {
      console.log('Need to install MetaMask');
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount: string): void => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account: string): void => {
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      })
      .then((balance: any) => {
        setUserBalance(ethers.formatEther(balance));
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const chainChangedHandler = (): void => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on('accountsChanged', accountChangedHandler);

  window.ethereum.on('chainChanged', chainChangedHandler);
  return (
    <div>
      <Container>
        <Logo src={logo}></Logo>
        <Image src={image}></Image>
        <Card>
          <Title>Connect your wallet to proceed.</Title>
          <Button onClick={connectWalletHandler}>
            Connect Wallet
          </Button>
          <Wrapper>
            <Line></Line>
            or
            <Line></Line>
          </Wrapper>
          <Paragraph>
            If you don’t have a wallet, you can simply follow the
            steps to create one with your e-mail address.
          </Paragraph>
          <SecondaryButton></SecondaryButton>
          <Elipse></Elipse>
          <Elipse2></Elipse2>
          <Elipse3></Elipse3>
        </Card>
        <div>
          <Polygon></Polygon>
          <Polygon2></Polygon2>
          <Vector></Vector>
          <Vector2></Vector2>
          <Vector3></Vector3>
        </div>
      </Container>
    </div>
  );
}

export default Home;
