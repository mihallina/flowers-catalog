import React, { useEffect } from "react";
import "./Cart.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchCart,
  removeCartItem,
  updateCartItem,
} from "../../redux/cartActions";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (status === "succeeded" && items.length === 0) {
    return (
      <div className="container cart-empty">
        <img src="/images/emptycart.png" alt="Пустая корзина" />
        <h1>В корзине пока пусто</h1>
        <a className="cart-empty-btn" href="/">
          Перейти на главную
        </a>
      </div>
    );
  }

  if (status === "loading") {
    return <div className="container">Загрузка корзины...</div>;
  }

  if (status === "failed") {
    return (
      <div className="container">
        Ошбика загрузки корзины. Попробуйте позже.
      </div>
    );
  }

  const itemsQuantity = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="container cart">
      <h1>Ваша корзина: {itemsQuantity} товара</h1>
      <div className="cart-wrapper">
        <div key={items.length} className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>Цена: {item.price}</p>

                <div className="cart-quantity">
                  <button
                    className="quantity-btn"
                    disabled={item.quantity <= 1}
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(
                          updateCartItem({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        );
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(
                        updateCartItem({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeCartItem(item.id))}
              >
                <img src="/images/trash.svg" alt="" />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <div className="cart-total-text">
            <h2>
              Итого:
              {items
                .reduce(
                  (sum, item) => sum + parseFloat(item.price) * item.quantity,
                  0
                )
                .toFixed(2)}
              руб.
            </h2>
            <p>{itemsQuantity} товара</p>
          </div>
          <button className="cart-order-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
