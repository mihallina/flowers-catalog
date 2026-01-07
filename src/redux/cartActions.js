import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/cart`);
      if (!res.ok) {
        throw new Error("не удалось загрузить корзину");
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { dispatch, getState, rejectWithValue }) => {
    try {
      const { items } = getState().cart;
      const existingItem = items.find((item) => item.productId === product.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        return await dispatch(
          updateCartItem({ id: existingItem.id, quantity: newQuantity })
        ).unwrap();
      } else {
        const res = await fetch(`${API_URL}/cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          }),
        });

        if (!res.ok) {
          throw new Error("не удалось добавить в корзину");
        }
        return await res.json();
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:4000/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      if (!res.ok) {
        throw new Error("Не удалось обновить товар");
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id, { rejectWithValue }) => {
    try {
      await fetch(`http://localhost:4000/cart/${id}`, { method: "DELETE" });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
