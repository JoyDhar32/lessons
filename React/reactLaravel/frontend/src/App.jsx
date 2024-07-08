// src/components/Slider.js
import React, { useState } from 'react';

const slides = [
  {
    title: "Irresistible trade-in proposition",
    subtitle: "Unbeatable Value",
    highlight: "On Frozen Foods",
    description: "Embrace the frozen magic! Discover convenience and flavor with our exceptional selection of frozen foods",
    buttonText: "Shop Now",
    buttonLink: "/product/category/frozen-food",
    imgSrc: "/assets/imgs/slider/frozen_food.png",
  },
  {
    title: "Our Exceptional trade-in offer",
    subtitle: "Supper value deals",
    highlight: "On Fresh Foods",
    description: "Delicious, nutritious, and bursting with flavor, our fresh foods bring the farm-to-table experience right to your plate.",
    buttonText: "Shop Now",
    buttonLink: "/product/category/fresh-food",
    imgSrc: "/assets/imgs/slider/fresh_food.png",
  },
  {
    title: "Our Unbeatable Trade-in Deal",
    subtitle: "Supper value deals",
    highlight: "On Beverage",
    description: "Quench your thirst with delightful sips of flavor! Experience the refreshing taste of our beverages, crafted with care.",
    buttonText: "Shop Now",
    buttonLink: "/product/category/beverage",
    imgSrc: "/assets/imgs/slider/beverages.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex w-full h-full">
            <div className="w-1/2 bg-green-500 flex items-center justify-center text-white p-10">
              <div className="hero-slider-content-2">
                <h4 className="animated">{slide.title}</h4>
                <h2 className="animated fw-900">{slide.subtitle}</h2>
                <h1 className="animated fw-900 text-brand" style={{ color: '#16542E' }}>{slide.highlight}</h1>
                <p className="animated" style={{ color: 'black', fontWeight: 'bold' }}>{slide.description}</p>
                <a className="animated btn btn-brush btn-brush-3 bg-blue-500 text-white p-2 rounded" to={slide.buttonLink}>
                  {slide.buttonText}
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <img src={slide.imgSrc} alt="Slide" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">◀</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">▶</button>
    </div>
  );
};

export default Slider;
