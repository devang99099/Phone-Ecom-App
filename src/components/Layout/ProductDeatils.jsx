import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getSingleProduct } from "../../api/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// ✅ Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(0);

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
    <section className=" text-black p-6 my-5 md:p-12 border-y-2 border-gray-500">
      <div className="mx-auto flex flex-col md:flex-row gap-20 items-center">
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

        {/* 👇 Product Info */}
        <div className="w-full md:w-1/2 space-y-5 text-lg">
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
            {product.weight || "N/A"}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Warranty: </span>
            {product.warrantyInformation}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Shipping: </span>
            {product.shippingInformation}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Availability: </span>
            {product.availabilityStatus}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Return Policy: </span>
            {product.returnPolicy}
          </p>

          <div className="flex gap-10">
            <button
              onClick={() => setCart(cart + 1)}
              className="mt-6 px-6 py-2 bg-black hover:bg-blue-700 text-gray-200 rounded-lg shadow hover:text-white duration-400 cursor-pointer"
            >
              Add to Cart
            </button>

            <NavLink to="/product">
              <button className="mt-6 px-6 py-2 bg-black hover:bg-blue-700 text-gray-200 rounded-lg shadow hover:text-white duration-400 cursor-pointer">
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
