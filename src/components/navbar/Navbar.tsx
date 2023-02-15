import { List } from 'phosphor-react';
import { useState } from 'react';
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

  return (
    <div>
      <Nav>
        <List size={24} color="white" />
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
