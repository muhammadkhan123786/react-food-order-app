import { useContext } from 'react';
import Modal from '../UI/Modal';

import UserProgressContext from '../Context/UserProgressContext';
import { currencyFormatter, calculateTotalPrice } from '../utils/formatting.js';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import APIsContext from '../Context/APIContext.jsx';
import CartContext from '../Context/CartContext.jsx';

export default function Checkout() {
  const { userProgress, hideCheckout } = useContext(UserProgressContext);
  const { items } = useContext(CartContext);
  const { addOrder } = useContext(APIsContext);
  const totalPrice = calculateTotalPrice();

  function handleCloseCheckout() {
    hideCheckout();
  }
  let actions = (
    <>
      <Button type="button" textOnly onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit an order</Button>
    </>
  );

  function handleSubmitAction(fd) {
    const customerData = Object.fromEntries(fd.entries());
    const { loading: isSending, error, data } = addOrder(customerData, items);
    if (isSending) {
      actions = <span>Data is sending...</span>;
    }
  }
  return (
    <Modal
      open={userProgress === 'showCheckout'}
      onClose={userProgress === 'showCheckout' ? handleCloseCheckout : null}
    >
      <form action={handleSubmitAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-mail Addres" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
