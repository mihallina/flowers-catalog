import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsActions";
import ProductCard from "../categoryPage/ProductCard";
import "./ProductInfo.css";
import { addToCart } from "../../redux/cartActions";

const ProductInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { categories, products, status } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status !== "succeeded") {
    return <div className="container">Загрузка товара...</div>;
  }

  const product = products.find((p) => +p.id === +id);
  const currentCatId = product?.categoryId;
  const similar = products
    .filter((p) => p.categoryId === currentCatId && +p.id !== +id)
    .slice(0, 6);

  const currCat = categories.find((c) => c.id === currentCatId);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return (
      <div className="container error-content">
        <h1 className="error-title">Товар не найден</h1>
        <a href="/" className="link-toHome">
          Вернуться на главную
        </a>
      </div>
    );
  }

  return (
    <div className="container productInfo-all">
      <div className="productInfo">
        <div className="productInfo-img">
          <img
            src={product.image}
            alt={product.name}
            className="productInfo-img"
          />
        </div>

        <div className="productInfo-char">
          <div className="productInfo-char-info">
            <h1>{product.name}</h1>
            <p className="productInfo-price">{product.price} руб.</p>
            <p className="productInfo-height">Высота: {product.height} см</p>
            <button
              className="inCart"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
            >
              В корзину
            </button>
          </div>
          <div className="productInfo-desc">
            <h2>Описание</h2>
            <p>{currCat.descr}</p>
          </div>
        </div>
      </div>

      <h2 className="similar-title">Вам также могут понравиться:</h2>
      <div className="productInfo-similar">
        {similar.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
