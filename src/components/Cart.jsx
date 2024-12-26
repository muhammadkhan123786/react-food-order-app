import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../Context/CartContext';
import { currencyFormatter, calculateTotalPrice } from '../utils/formatting.js';
import Button from '../UI/Button.jsx';
import UserProgressContext from '../Context/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';

export default function Cart() {
  const { items } = useContext(CartContext);
  const totalPrice = calculateTotalPrice();
  const { userProgress, hideCart, showCheckout } =
    useContext(UserProgressContext);
  function handleCloseClick() {
    hideCart();
  }
  function handlCheckoutClick() {
    showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgress === 'showCart'}
      onClose={userProgress === 'showCart' ? handleCloseClick : null}
    >
      <h2>You Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseClick}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handlCheckoutClick}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
