"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function SliderShowcase() {
  const slides = [
    "/imgs/1.jpg", 
    "/imgs/Trade-2.jpg", 
    "/imgs/heading.jpg", 

  ]

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-6 mt-10 px-4 sm:px-10 mb-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">Premium Rice Exports</h2>
        <p className="">
          Discover the journey of Pakistan’s top-quality Basmati rice as it reaches global markets. Explore stories of farmers, exporters, and changing global trends.
        </p>
        <button className="bg-[#db20d5] px-4 py-2 rounded-md text-white font-semibold border hover:bg-transparent hover:border hover:border-[#db20d5] hover:text-[#db20d5] transition">
          Learn More
        </button>
      </div>

      {/* Right Slider */}
      <div className="md:w-1/2 w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg shadow-md"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
