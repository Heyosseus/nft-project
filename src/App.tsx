import { GlobalStyles } from './styles/GlobalStyles';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
function App() {
  const [defaultAccount, setDefaultAccount] = useLocalStorage('address', 
    null
  );
  const [userBalance, setUserBalance] = useState<string | null>(null);
  const [connButtonText, setConnButtonText] =
    useState<string>('Connect Wallet');

  const childProps = {
    defaultAccount,
    setDefaultAccount,
    userBalance,
    setUserBalance,
    connButtonText,
    setConnButtonText,
  };
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home {...childProps} />} />
          <Route path="/dashboard" element={<Dashboard {...childProps}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
