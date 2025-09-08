import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice.js";
import { getSingleProduct } from "../../api/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getSingleProduct(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p className="text-black text-center py-10">Loading product details...</p>
    );
  }

  return (
    <section className="text-black p-6 my-5 md:p-12 border-y-2 border-gray-500">
      <div className="mx-auto flex flex-col md:flex-row gap-20 items-center">
        {/* Product Images Slider */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Swiper
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-full h-auto"
          >
            {product.images?.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgUrl}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-auto object-cover rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-5 text-lg max-lg:text-base">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-3">
            {product.title}
          </h2>

          <p className="font-semibold">
            <span className="font-semibold text-gray-700">Price: </span>$
            {product.price}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Rating: </span>
            {product.rating}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Brand: </span>
            {product.brand}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Weight: </span>
            {"N/A"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Warranty: </span>
            {product.warrantyInformation || "Not available"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Shipping: </span>
            {product.shippingInformation || "Standard shipping"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Stock: </span>
            {product.stock || "Standard shipping"}
          </p>

          <p>
            <span className="font-semibold text-gray-700">Availability: </span>
            {product.availabilityStatus || "In stock"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Return Policy: </span>
            {product.returnPolicy || "7-day return"}
          </p>

          {/* Buttons */}
          <div className="flex gap-10 max-sm:gap-4">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-6 px-6 py-2 bg-gray-700 hover:bg-black text-gray-200 rounded-lg shadow hover:text-white duration-200 cursor-pointer"
            >
              Add to Cart
            </button>

            <NavLink to="/product">
              <button className="mt-6 px-6 py-2 bg-gray-700 hover:bg-black text-gray-200 rounded-lg shadow hover:text-white duration-200 cursor-pointer">
                Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
