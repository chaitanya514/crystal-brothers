import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    gap:2
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
        <div>
        <img
            src="https://images.unsplash.com/photo-1647690868150-b2132f01fb3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            className="w-full h-full object-cover p-1"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
