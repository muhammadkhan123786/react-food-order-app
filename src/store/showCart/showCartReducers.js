import {
  showCart,
  hideCart,
  showCheckout,
  hideCheckout,
} from './showCartActions';

const initialState = { userProgress: '' };

const cartShowReducers = (state = initialState, action) => {
  if (action.type === showCart) {
    return { ...state, userProgress: 'showCart' };
  } else if (action.type === hideCart) {
    return { ...state, userProgress: '' };
  } else if (action.type === showCheckout) {
    return { ...state, userProgress: 'showCheckout' };
  } else if (action.type === hideCheckout) {
    return { ...state, userProgress: '' };
  }
  return state;
};

export default cartShowReducers;
