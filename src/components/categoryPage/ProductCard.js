import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartActions";
import Notification from "../cart/Notification";

const ProductCard = ({ product }) => {
  const [notifVisible, setNotifVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setNotifVisible(true);
  };

  const handleNotifClose = () => {
    setNotifVisible(false);
  };
  return (
    <>
      <Link to={`/product/${product.id}`} className="productCard">
        <div className="productCard-content">
          <div className="productCard-img-wrapper">
            <img
              className="productCard-img"
              src={product.image}
              alt={product.name}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="productCard-loadImg">Загрузка картинки...</div>
            )}
          </div>
          <span className="productCard-price">{product.price}</span>
          <span className="productCard-name">{product.name}</span>
        </div>
        <button
          className="inCart"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          В корзину
        </button>
      </Link>
      <Notification
        message="Товар добавлен в корзину"
        isVisible={notifVisible}
        onClose={handleNotifClose}
      />
    </>
  );
};

export default ProductCard;
