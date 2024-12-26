import { addItem, removeItem } from './cartItemsActions';

const initialState = { items: [] };

const cartItemReducerFn = (state = initialState, action) => {
  if (action.type === addItem) {
    let preItems = [...state.items];
    const isItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (isItemIndex > -1) {
      //item already exists.
      preItems = preItems.map((item, index) => {
        index === isItemIndex ? { ...item, quantity: item.quantity + 1 } : item;
      });
      return preItems;
    } else {
      //new item comes.
      preItems = [...state, { ...action.item, quantity: 1 }];
      return preItems;
    }
  }
  return state;
};

export default cartItemReducerFn;
