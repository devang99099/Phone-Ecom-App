import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const images = [
  {
    src: "https://resource.kinhtedothi.vn/2025/02/23/man-hinh-galaxy-z-flip-7-cover.jpg",
    title: "Samsung Galaxy Z Flip 7",
    desc: "The future of foldables starts here.",
  },
  {
    src: "https://image.oppo.com/content/dam/oppo/sg/mkt/newsroom/press/oppo-march-new-launches/image-1600-1.webp",
    title: "Oppo Reno 13F",
    desc: "Style meets performance.",
  },
  {
    src: "https://vivonewsroom.b-cdn.net/wp-content/uploads/2025/06/Y400-Series_Banner.jpg",
    title: "Vivo Y400 Pro",
    desc: "A powerhouse in your pocket.",
  },
];

const Home = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
    arrows: false, // Hide default arrows
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      {/* Prev Button */}
      <button
        className="absolute  top-1/2 left-1 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition 2xl:top-80 max-2xl:top-80 max-lg:top-70 max-md:top-55 max-sm:top-30"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <GrPrevious size={20} />
      </button>

      {/* Carousel */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((img, idx) => (
          <div key={idx} className="relative group ">
            <img
              src={img.src}
              alt={img.title}
              className="w-full  rounded-xl shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-70 transition">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {img.title}
              </h2>
              <p className="text-sm md:text-lg">{img.desc}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Next Button */}
      <button
        className="absolute right-1  transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition max-2xl:top-80 2xl:top-80 max-lg:top-70 max-md:top-55 max-sm:top-30"
        onClick={() => sliderRef.current.slickNext()}
      >
        <GrNext size={20} />
      </button>

      {/* Welcome Text */}

      <div className="max-w-4xl mx-auto text-center px-4 mt-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to The Mobile Store</h2>
        <p className="text-gray-600 text-lg">
          Discover the latest smartphones, unbeatable prices, and top-notch
          customer service. Whether you're looking for flagship devices, budget
          phones, or exclusive deals — we’ve got it all.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-12 px-4 text-center">
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Latest Devices</h3>
          <p className="text-gray-600">
            Stay ahead with our collection of the newest smartphones from top
            brands like Samsung, Apple, OnePlus, and more.
          </p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
          <p className="text-gray-600">
            We offer the best market prices with seasonal offers, bundle
            discounts, and no hidden charges.
          </p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
          <p className="text-gray-600">
            Receive your orders quickly with our reliable nationwide shipping
            and real-time tracking.
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-3">Ready to Upgrade?</h3>
        <p className="text-gray-700 mb-5">
          Explore our handpicked selection of trending smartphones and grab your
          favorite today.
        </p>
        <NavLink
          to="/product"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Shop Now
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
