import { createContext } from 'react';
import config from '../components/Config';
import useHttp from '../hooks/useHttp';
import { useDispatch } from 'react-redux';
import { remove_all_items } from '../store/cartItems/cartItemsActions';
const order_url = `${config.baseUrl}/orders`;
const get_meals_url = `${config.baseUrl}/meals`;

const configuration = {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
};
const APIsContext = createContext({
  addOrder: (data, items) => {},
  getMeals: () => {},
});

export function APIContext({ children }) {
  const dispatch = useDispatch();
  //add order hook
  const {
    loading: isSending,
    error: isSendingReqError,
    data: isSendingReqdata,
    sendRequest,
  } = useHttp(order_url, configuration);

  //get meals hook call.
  const {
    loading: isFetchingMeals,
    error: isFetchingMealsError,
    data: isFetchingMealsData,
  } = useHttp(get_meals_url, { method: 'GET' }, []);

  async function addOrderData(customer, items) {
    //send a request backend to add the order.

    const orderData = {
      order: {
        items: items,
        customer: customer,
      },
    };
    await sendRequest(orderData);
    if (!isSendingReqError) {
      dispatch(remove_all_items());
    }

    return {
      loading: isSending,
      error: isSendingReqError,
      data: isSendingReqdata,
    };
  }
  //get meals
  function Meals() {
    return {
      loading: isFetchingMeals,
      error: isFetchingMealsError,
      data: isFetchingMealsData,
    };
  }
  const ctx = {
    addOrder: addOrderData,
    getMeals: Meals,
  };
  return <APIsContext.Provider value={ctx}>{children}</APIsContext.Provider>;
}
export default APIsContext;
