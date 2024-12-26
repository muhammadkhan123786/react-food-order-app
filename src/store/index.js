import { combineReducers, createStore } from 'redux';
import cartItemReducerFn from './cartItems/cartItemsReducers';
import cartShowReducers from './showCart/showCartReducers';

const store = createStore(
  combineReducers({
    cartItemReducers: cartItemReducerFn,
    showCartReducers: cartShowReducers,
  })
);

export default store;
