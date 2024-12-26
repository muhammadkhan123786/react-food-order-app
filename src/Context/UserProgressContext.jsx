import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  userProgress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('showCart');
  }
  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    console.log('Checkout');
    setUserProgress('showCheckout');
  }

  function hideCheckout() {
    setUserProgress('');
  }
  const userProgressCtx = {
    userProgress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
