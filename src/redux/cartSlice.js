import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {productId, quantity = 1} = action.payload;
            const existingItem = state.find(item => item.productId === productId);
            
            if(existingItem){
                existingItem.quantity += quantity;
            } else {
                state.push({
                    id: Date.now(),
                    productId,
                    quantity,
                });
            }
        },
        updateQuantity: (state, action) => {
            const {productId, quantity} = action.payload;
            const item = state.find(item => item.productId === productId);
            if(item && quantity > 0){
                item.quantity = quantity;
            } else if (item && quantity <= 0) {
                return state.filter(item => item.productId !== productId);
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            return state.filter(item => item.productId !== productId);
        },
        clearCart: () => [],
    }
})

export const {
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;