import { useContext } from 'react';
import { currencyFormatter } from '../utils/formatting';
import CartContext from '../Context/CartContext';

export default function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);

  function handleAddItem() {
    addItem(item);
  }
  function handleRemoveItem() {
    removeItem(item.id);
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
