import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const images = [
  {
    src: "https://resource.kinhtedothi.vn/2025/02/23/man-hinh-galaxy-z-flip-7-cover.jpg",
    title: "Product 1",
    desc: "Samsung Galaxy z flip 7.",
  },
  {
    src: "https://image.oppo.com/content/dam/oppo/sg/mkt/newsroom/press/oppo-march-new-launches/image-1600-1.webp",
    title: "Product 2",
    desc: "Reno 13F.",
  },
  {
    src: "https://vivonewsroom.b-cdn.net/wp-content/uploads/2025/06/Y400-Series_Banner.jpg",
    title: "Product 3",
    desc: "Vivo Y400 pro`.",
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
    <div className="flex flex-col items-center relative w-full">
      {/* Prev Button - left edge */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gray-300 rounded-lg z-10"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <GrPrevious />
      </button>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="w-full">
          <Slider ref={sliderRef} {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-170 w-350 rounded-md mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Next Button - right edge */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gray-300 rounded-lg z-10"
        onClick={() => sliderRef.current.slickNext()}
      >
        <GrNext />
      </button>
      <p className="text-center mt-5">Welcome to our e-commerce store!</p>
    </div>
  );
};

export default Home;
