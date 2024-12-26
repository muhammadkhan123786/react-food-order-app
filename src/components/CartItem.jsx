import { add_Item, remove_Item } from '../store/cartItems/cartItemsActions';
import { currencyFormatter } from '../utils/formatting';
import { useDispatch } from 'react-redux';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(add_Item(item));
  }
  function handleRemoveItem() {
    dispatch(remove_Item(item.id));
  }
  return (
    <>
      <li className="cart-item">
        <p>
          {item.name}- {item.quantity} x {currencyFormatter.format(item.price)}
        </p>
        <p className="cart-item-actions">
          <button onClick={handleRemoveItem}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleAddItem}>+</button>
        </p>
      </li>
    </>
  );
}
