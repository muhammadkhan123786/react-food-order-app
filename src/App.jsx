import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Header from './components/Header';
import MealsComponent from './components/Meals.jsx';
import { APIContext } from './Context/APIContext.jsx';

function App() {
  return (
    <APIContext>
      <Header />
      <MealsComponent />
      <Cart />
      <Checkout />
    </APIContext>
  );
}

export default App;
