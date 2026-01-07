import React from "react";
import { useAppSelector } from "../../redux/hooks";
import "./PopularCategorys.css";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";

const PopularCategorys = () => {
  const placeholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='16' fill='%23999'%3ENo image%3C/text%3E%3C/svg%3E";
  const { categories, products, status } = useAppSelector(
    (state) => state.products
  );

  if (status !== "succeeded") {
    return (
      <div className="container">
        <div>Загрузка популярных категорий...</div>
      </div>
    );
  }

  const popularCategories = categories.slice(3, 10);
  const categoryData = popularCategories.map((category) => {
    const firstProduct = products.find((p) => p.categoryId === category.id);

    return {
      id: category.id,
      name: category.name,
      image: firstProduct ? firstProduct.image : placeholder,
      categoryId: category.id,
      slug: category.slug,
    };
  });

  return (
    <div className="container popularCategorys">
      <h1 className="popularCategorys-title">Популярные категории</h1>
      <div className="popularCategorys-wrapper">
        {categoryData.map((item) => (
          <PopularCard
            key={item.id}
            url={item.image}
            text={item.name}
            slug={item.slug}
          />
        ))}
        <Link to='/products' className="popularCard-all">Все товары</Link>
      </div>
    </div>
  );
};

export default PopularCategorys;
