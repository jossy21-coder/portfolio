import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Keyboard,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import photo1 from "../../assets/testimonials/photo1.jpg";
import photo2 from "../../assets/testimonials/photo2.jpg";
import photo3 from "../../assets/testimonials/photo3.jpg";
import photo4 from "../../assets/testimonials/photo4.jpg";
import photo5 from "../../assets/testimonials/photo5.jpg";
import photo6 from "../../assets/testimonials/photo6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * @typedef {{ id: number, url: string }} ImageData
 */

/** @type {ImageData[]} */
const sampleImages = [
  {
    id: 1,
    url: photo1,
  },
  {
    id: 2,
    url: photo2,
  },
  {
    id: 3,
    url: photo3,
  },
  {
    id: 4,
    url: photo4,
  },
  {
    id: 5,
    url: photo5,
  },
  {
    id: 6,
    url: photo6,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Custom navigation button handlers
    const prevButton = document.querySelector(".custom-prev");
    const nextButton = document.querySelector(".custom-next");

    const handlePrevClick = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };

    const handleNextClick = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    prevButton?.addEventListener("click", handlePrevClick);
    nextButton?.addEventListener("click", handleNextClick);

    return () => {
      prevButton?.removeEventListener("click", handlePrevClick);
      nextButton?.removeEventListener("click", handleNextClick);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Amanuel Mihiret</title>
        <meta
          name="description"
          content="Explore AI, IoT, and CV projects by Amanuel Mihiret."
        />
        <meta
          name="keywords"
          content="AI, IoT, Computer Vision, Portfolio, Amanuel Mihiret"
        />
      </Helmet>
      <section id="testimonials">
        {/* title section */}
        <div>space</div>
        <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl font-bold text-white">TESTIMONIALS</h2>
          <div className="w-40 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            What My Clients Say About Me.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          {/* Swiper Container */}
          <div className="relative group">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination, Autoplay, EffectFade, Keyboard]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pb-16"
            >
              {sampleImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-[4/2] overflow-hidden">
                      <img
                        src={image.url}
                        alt={`Gallery image ${image.id}`}
                        className="w-full h-full object-cover transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100">
              <ChevronLeft className="w-6 h-6 cursor-pointer" />
            </button>

            <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100">
              <ChevronRight className="w-6 h-6 cursor-pointer" />
            </button>

            {/* Custom Pagination */}
            <div className="custom-pagination flex justify-center space-x-2 mt-8"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
