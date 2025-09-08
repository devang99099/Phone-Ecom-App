import React, { useEffect, useState } from "react";

import { getProductData } from "../api/productApi";
import ProductCard from "../components/Layout/ProductCard";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductData();
        setProduct(res.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="container text-white px-6 py-8 min-h-screen mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
        {Array.isArray(product) &&
          product.map((curProduct) => (
            <ProductCard product={curProduct} key={curProduct.id} />
          ))}
      </ul>
    </section>
  );
};

export default Product;
