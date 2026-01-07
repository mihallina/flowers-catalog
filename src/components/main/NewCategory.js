//блок с картинкой, надписью. при нажатии открывается страница с
//ассортиментом этой категории. при наведение мышкой - свечение
import React from "react";
import "./NewCategory.css";
import { Link } from "react-router-dom";

const NewCategory = ({ url, text, slug }) => {
  return (
    <Link to={`/category/${slug}`} className="newCategory-link">
      <div className="newCategory-block">
        <div className="band">Новинки</div>
        <img className="newCategory-img" src={url} alt={text} loading="lazy" />
      </div>
      <div className="newCategory-text">{text}</div>
    </Link>
  );
};

export default NewCategory;
