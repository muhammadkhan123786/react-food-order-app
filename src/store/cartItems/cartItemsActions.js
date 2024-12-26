export const addItem = 'ADD_ITEM';
export const removeItem = 'REMOVE_ITEM';

export const add_Item = (item) => ({
  type: addItem,
  item,
});

export const remove_Item = (id) => ({
  type: removeItem,
  id,
});
