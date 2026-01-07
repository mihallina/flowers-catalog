//содержит 3 категории новинки
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import NewCategory from "./NewCategory";
import "./NewCategorys.css";

const NewCategorys = () => {
  const placeholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='16' fill='%23999'%3ENo image%3C/text%3E%3C/svg%3E";

  const { categories, products, status } = useAppSelector(
    (state) => state.products
  );

  if (status !== "succeeded") {
    return (
      <div className="container">
        <div>Закгрузка новинок...</div>
      </div>
    );
  }

  const topCategories = categories.slice(0, 3);
  const categoryData = topCategories.map((category) => {
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
    <div className="container newCategorys">
      {categoryData.map((item) => (
        <NewCategory
          key={item.id}
          url={item.image}
          text={item.name}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default NewCategorys;
