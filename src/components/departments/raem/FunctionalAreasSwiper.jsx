 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fnarea1 from "../../../assets/fnarea1.png";
import fnarea2 from "../../../assets/fnarea2.png";
import fnarea3 from "../../../assets/fnarea3.png";
 import fnarea4 from "../../../assets/fnarea4.png";


export default function FunctionalAreasSwiper() {
  const functionalAreas = [
    {
      title: "Signal, Telecom and RAMS",
      description:
        "Specialized focus on Railway Signaling, Telecom & Optical Fiber Technology, and RAMS to enhance safety, reliability, and efficiency in railway operations.",
      image: fnarea1,
    },
    {
      title: "Education & Training Programs",
      description:
        "Short-term courses, Certificate Programs, One-Year Diploma, and Two-Year M.Tech in Railway Signaling, Telecom, and RAMS to develop skilled professionals.",
      image: fnarea2,
    },
    {
      title: "Research and Development in Mobility",
      description:
        "Product development, lab establishment for ERTMS Level 1 & 2, and advanced R&D in traffic signaling, rolling stock, and reliability solutions.",
      image: fnarea3,
    },
    {
      title: "Alternative Energy Solutions",
      description:
        "Exploring hydrogen-powered vehicles, solar energy, and other renewable techniques to promote sustainable transportation systems.",
      image: fnarea4,
    },
    {
      title: "Maintenance & Optimization",
      description:
        "Forecasting reliability, managing inventory, preventive and corrective maintenance, and developing optimization solutions for smooth operations.",
      image: "https://img.freepik.com/premium-photo/smart-grid-optimization-renewable-energy_1022456-162721.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-800 mb-4">Key Functional Areas</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button className="swiper-button-prev-functional absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100">
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next-functional absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100">
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-functional",
              prevEl: ".swiper-button-prev-functional",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {functionalAreas.map((area, index) => (
              <SwiperSlide key={index}>
                <div className="h-[370px] flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-purple-300">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800">{area.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 overflow-hidden text-ellipsis max-h-[120px]">
                      {area.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
