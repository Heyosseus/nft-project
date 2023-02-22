import { List } from 'phosphor-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Address, Circle, Nav } from '../../styles/DashBoardStyles';
import { Images } from '../../utils/Images';


function Navbar() {
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

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/menu');
  };

  return (
    <div>
      <Nav>
        <ListIcon size={28} color="white" onClick={navigateHandler} />
        <Address>
          {shortAddress}
          <Circle>
            <img src={Images.circle} alt="address profile" />
          </Circle>
        </Address>
      </Nav>
    </div>
  );
}

export default Navbar;



const ListIcon = styled(List)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

