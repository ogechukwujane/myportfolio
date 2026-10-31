"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ImageSwiper = ({ images }: { images: string[] }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev_btn",
          nextEl: ".next_btn",
        }}
        autoplay={{
          delay: 3000,
        }}
        speed={800}
        pagination={{ clickable: true }}
        className="!pb-[50px]"
      >
        {images.map((image, key) => (
          <SwiperSlide key={key}>
            <Image
              src={image}
              width={600}
              height={600}
              alt={`image${key + 1}`}
              className="w-full h-fit border-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="nav_btns max-sm:hidden">
        <span className="prev_btn cursor-pointer swiper_nav_btn !left-[-50px] ">
          <FaArrowLeft />
        </span>
        <span className="next_btn cursor-pointer swiper_nav_btn !right-[-50px] ">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default ImageSwiper;
