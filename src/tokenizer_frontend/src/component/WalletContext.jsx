// component/WalletContext.jsx
import { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [principal, setPrincipal] = useState(null);

  return (
    <WalletContext.Provider value={{ principal, setPrincipal }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
