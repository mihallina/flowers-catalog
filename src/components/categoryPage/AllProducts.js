import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsActions";
import ProductCard from "./ProductCard";
import "./AllProducts.css";

const AllProducts = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status !== "succeeded") {
    return <div className="container">Загрузка всех товаров...</div>;
  }

  return (
    <div className="container allProducts">
      <h1>Все товары</h1>
      <p>Товаров в наличии: {products.length}</p>

      <div className="allProducts-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
