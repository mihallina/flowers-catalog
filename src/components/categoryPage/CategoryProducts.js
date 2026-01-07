import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsActions";
import ProductCard from "./ProductCard";
import "./CategoryProducts.css";

const CategoryProducts = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories, products, status } = useAppSelector(
    (state) => state.products
  );

  const category = categories.find((cat) => cat.slug === slug);
  const categoryId = category?.id;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status !== "succeeded") {
    return (
      <div className="container">
        <div>Загрузка продуктов...</div>
      </div>
    );
  }

  if (category === undefined) {
    return (
      <div className="container">
        <div>Категория не найдена</div>
      </div>
    );
  }

  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  return (
    <div className="categoryPage container">
      <h1 className="categoryPage-title">{category.name}</h1>
      <h3 className="categoryPage-inStock">
        Товаров в наличии: {categoryProducts.length}
      </h3>

      <div className="categoryProd_wrapper">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
