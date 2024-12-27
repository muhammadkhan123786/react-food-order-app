import { addItem, removeItem, removeAllItems } from './cartItemsActions';

const initialState = { items: [] };

const cartItemReducerFn = (state = initialState, action) => {
  let updatedItems = [...state.items];
  if (action.type === addItem) {
    const isItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (isItemIndex > -1) {
      //item already exists.
      updatedItems = updatedItems.map((item, index) =>
        index === isItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      //new item comes.
      updatedItems = [...state.items, { ...action.item, quantity: 1 }];
    }
    return { ...state, items: updatedItems };
  } else if (action.type === removeItem) {
    const itemIndexInItems = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    if (itemIndexInItems > -1) {
      const item = updatedItems[itemIndexInItems];
      if (item.quantity > 1) {
        updatedItems = updatedItems.map((item, index) =>
          index === itemIndexInItems
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        updatedItems = updatedItems.filter((item) => item.id != action.id);
      }
    } else {
      return state;
    }
    return { ...state, items: updatedItems };
  } else if (action.type === removeAllItems) {
    updatedItems = [];
    return { ...state, items: updatedItems };
  }
  return state;
};

export default cartItemReducerFn;
