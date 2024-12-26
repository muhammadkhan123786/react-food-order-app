import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Header from './components/Header';
import MealsComponent from './components/Meals.jsx';
import { APIContext } from './Context/APIContext.jsx';
import { CartContextProvider } from './Context/CartContext.jsx';
import { UserProgressContextProvider } from './Context/UserProgressContext.jsx';

function App() {
  return (
    <APIContext>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <MealsComponent />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </APIContext>
  );
}

export default App;
