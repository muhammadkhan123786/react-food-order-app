export const addItem = 'ADD_ITEM';
export const removeItem = 'REMOVE_ITEM';
export const removeAllItems = 'REMOVE_ALL_ITEMS';

export const add_Item = (item) => ({
  type: addItem,
  item,
});

export const remove_all_items = () => ({ type: removeAllItems });
export const remove_Item = (id) => ({
  type: removeItem,
  id,
});
