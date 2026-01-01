import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const [categoriesRes, productsRes] = await Promise.all([
        fetch(`${API_URL}/categories`),
        fetch(`${API_URL}/products`)
      ]);

      if(!categoriesRes.ok || !productsRes.ok) {
        throw new Error('Ошибка загрузки данных');
      }

      const categories = (await categoriesRes.json()).map(cat => ({
        ...cat,
        id: Number(cat.id)
      }));
      const products = (await productsRes.json()).map(p => ({
        ...p,
        categoryId: Number(p.categoryId)
      }));

      return {categories, products};
    } catch (err) {
        return rejectWithValue(err.message)
    }
  }
);
