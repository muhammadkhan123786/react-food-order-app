import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from '../UI/Button';

import { useDispatch, useSelector } from 'react-redux';
import { show_CART } from '../store/showCart/showCartActions';

export default function Header() {
  const items = useSelector((state) => state.cartItemReducers.items);
  const dispatch = useDispatch();
  function handleCartClick() {
    dispatch(show_CART());
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
