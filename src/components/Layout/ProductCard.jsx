import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;
  //   console.log(product);

  const { id, title, rating, thumbnail, price } = product;

  return (
    <li className="text-black p-5 flex flex-col items-start gap-4 w-[260px] rounded-4xl shadow-md border border-gray-700 overflow-hidden max-w-xs">
      <img className="rounded-lg " src={thumbnail} alt={title} />
      <div className="flex flex-col  space-y-1.5">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text font-normal">
          <span className="font-semibold">Rating : </span>
          {rating}
        </p>
        <p className="text-lg font-normal">
          <span className="font-semibold">Prise : </span>${price}
        </p>
      </div>
      <NavLink to={`/product/${id}`}>
        <button className=" px-14 py-1 border-2 border-gray-600 rounded-2xl  hover:scale-110 transition-all duration-300 cursor-pointer">
          Read more →
        </button>
      </NavLink>
    </li>
  );
};

export default ProductCard;
