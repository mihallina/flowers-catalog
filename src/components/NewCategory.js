//блок с картинкой, надписью. при нажатии открывается страница с
//ассортиментом этой категории. при наведение мышкой - свечение
import React from "react";
import "./NewCategory.css";

const NewCategory = ({ url, text }) => {
  return (
    <a href="#" className="newCategory-link">
      <div className="newCategory-block">
        <div className="band">Новинки</div>
        <img className="newCategory-img" src={url} alt={text} loading="lazy" />
      </div>
      <div className="newCategory-text">{text}</div>
    </a>
  );
};

export default NewCategory;
