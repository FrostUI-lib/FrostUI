'use client'

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ImageData {
  src: string;
  title: string;
  description?: string;
}

export interface ImageCarouselProps {
  images: ImageData[]; // required now
  buttonClassName?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  buttonClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextIndex = (currentIndex + 1) % images.length;
  const prevIndex = (currentIndex - 1 + images.length) % images.length;

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  return (
    <div className="relative w-[400px] h-[550px] mx-auto mt-32">
      {/* Side images */}
      <img
        src={images[prevIndex].src}
        alt="img-prev"
        className={`hidden sm:block absolute top-[6.5rem] left-0 w-[280px] h-[350px] object-cover rounded-md shadow-lg transition-all duration-700 ease-in-out -translate-x-[180px] -rotate-[20deg] opacity-100 z-0 ${
          isTransitioning ? "opacity-0 -translate-x-[220px] -rotate-[30deg]" : ""
        }`}
      />
      <img
        src={images[nextIndex].src}
        alt="img-next"
        className={`hidden sm:block absolute top-[6.5rem] right-0 w-[280px] h-[350px] object-cover rounded-md shadow-lg transition-all duration-700 ease-in-out translate-x-[180px] rotate-[20deg] opacity-100 z-0 ${
          isTransitioning ? "opacity-0 translate-x-[220px] rotate-[30deg]" : ""
        }`}
      />

      {/* Main image */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10 w-[360px] h-[500px] rounded-md shadow-2xl overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={`img-${currentIndex}`}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute top-0 left-0 w-full px-4 py-3 text-white z-20">
          <h2 className="text-xl font-semibold">{images[currentIndex].title}</h2>
          {images[currentIndex].description && (
            <p className="text-sm">{images[currentIndex].description}</p>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-6 z-30">
        <button
          onClick={prevImage}
          disabled={isTransitioning}
          className={cn(
            `text-xl sm:text-2xl px-4 py-2 rounded-full shadow-lg transition-all duration-300 disabled:opacity-40
             bg-[#dcdcdc] text-black dark:bg-black dark:text-white
             hover:scale-110
             focus:outline-none focus:ring-2 focus:ring-purple-500
             focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950`,
            buttonClassName
          )}
        >
          ←
        </button>
        <button
          onClick={nextImage}
          disabled={isTransitioning}
          className={cn(
            `text-xl sm:text-2xl px-4 py-2 rounded-full shadow-lg transition-all duration-300 disabled:opacity-40
             bg-[#dcdcdc] text-black dark:bg-black dark:text-white
             hover:scale-110
             focus:outline-none focus:ring-2 focus:ring-purple-500
             focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950`,
            buttonClassName
          )}
        >
          →
        </button>
      </div>
    </div>
  );
};