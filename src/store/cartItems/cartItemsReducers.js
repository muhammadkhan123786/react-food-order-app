import { addItem, removeItem } from './cartItemsActions';

const initialState = { items: [] };

const cartItemReducerFn = (state = initialState, action) => {
  if (action.type === addItem) {
    let updatedItems = [...state.items];
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
  }
  return state;
};

export default cartItemReducerFn;
