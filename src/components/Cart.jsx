import Modal from '../UI/Modal';
import { currencyFormatter, calculateTotalPrice } from '../utils/formatting.js';
import Button from '../UI/Button.jsx';
import CartItem from './CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { hide_CART, show_CHECKOUT } from '../store/showCart/showCartActions.js';

export default function Cart() {
  const items = useSelector((state) => state.cartItemReducers.items);
  const userProgress = useSelector(
    (state) => state.showCartReducers.userProgress
  );

  const dispatch = useDispatch();

  const totalPrice = calculateTotalPrice();

  function handleCloseClick() {
    dispatch(hide_CART());
  }
  function handlCheckoutClick() {
    dispatch(show_CHECKOUT());
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
