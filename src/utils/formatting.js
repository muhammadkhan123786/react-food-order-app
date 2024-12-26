import { useSelector } from 'react-redux';

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function calculateTotalPrice() {
  const items = useSelector((state) => state.cartItemReducers.items);
  const totalPrice = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  return totalPrice;
}
