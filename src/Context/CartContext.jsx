import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
function CartReducer(state, action) {
  const updateItems = [...state.items];
  if (action.type === 'ADD_ITEM') {
    //add item to an array...

    const checkIndexFound = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (checkIndexFound > -1) {
      const existingItem = state.items[checkIndexFound];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateItems[checkIndexFound] = updatedItem;
    } else {
      updateItems.push({ ...action.payload, quantity: 1 });
    }
    return { ...state, items: updateItems };
  }
  if (action.type === 'REMOVE_ITEM') {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    if (itemIndex > -1) {
      const item = updateItems[itemIndex];
      if (item.quantity > 1) {
        const updatedItem = {
          ...item,
          quantity: item.quantity - 1,
        };
        updateItems[itemIndex] = updatedItem;
      } else {
        updateItems.splice(itemIndex, 1);
      }
      return { ...state, items: updateItems };
    }
  }
  return state;
}

export function CartContextProvider({ children }) {
  //Now here we manage the states

  const [cart, dispatchActionFn] = useReducer(CartReducer, { items: [] }); //to manage complex statement management.

  function addItemFn(item) {
    dispatchActionFn({ type: 'ADD_ITEM', item: item });
  }
  function removeItemFn(id) {
    dispatchActionFn({ type: 'REMOVE_ITEM', id: id });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItemFn,
    removeItem: removeItemFn,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
export default CartContext;
