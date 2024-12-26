import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from '../UI/Button';
import CartContext from '../Context/CartContext';
import UserProgressContext from '../Context/UserProgressContext';

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  function handleCartClick() {
    showCart();
  }

  const totalItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo Image" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleCartClick}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
}
