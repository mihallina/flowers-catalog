export const selectCartTotalQuantity = (state) => {
  return state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
};
