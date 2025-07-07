 import React from "react";
import Focus from "./Focus";
import Services from "./Services";
import StartupsCarousel from "./StartupsCarousel";
import StartUp from "./StartUp";
import Team from "./Team";
import ImageGallery from "./ImageGallery";
import EventSlider from "./EventSlider";
import ContactUs from "./ContactUs";
import IncubationNav from "./IncubationNav";

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

const Incubation = () => {
  return (
    <SearchableWrapper>
    <div>
      {/* Banner Section */}
      <section className="relative h-96 bg-gradient-to-r from-cyan-900 via-blue-800 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://www.gburif.org/Photo%20Gallery/img/img-12.jpg")',
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Incubation Center</h1>
            <p className="text-xl opacity-90">
              Transforming research into real-world solutions through innovation
              and entrepreneurship
            </p>
          </div>
        </div>
      </section>
 
    <div className="bg-yellow-400 flex items-center justify-center py-1">
  <p className="text-black font-semibold mr-4 text-lg">
    Click Here for Idea Submission
  </p>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSc2dX1NwPluJ1A1-2cHY39ck3CYhrdCskgIQZUxCj981eDwew/viewform"
    className="bg-gray-500 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors"
  >
    Click Here!
  </a>
</div>

      {/* Sticky Navigation Header */}
      <IncubationNav />

      {/* About Section */}
      <div id="about" className="bg-white py-12 px-6 sm:py-16 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-red-500 mb-6">
              About Us
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              GBU started setting up its Incubation Centre in year 2018 which
              got StartinUP (Govt of Uttar Pradesh) recognition in year 2023 in
              the name of GBURIF (GBU Research and Innovation Foundation). Later
              on GBU got shortlisted for ATAL Incubation Centre subsequent to
              the application and presentation to ATAL Mission of NITI AAYOG.
              Then it was renamed as per the directions of Niti Aayog as AIC-GBU
              Incubation Centre.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              The AIC-GBU Incubation Center primarily aims to support startups,
              encourage entrepreneurhip, and early stage businesses by providing
              available resources, mentorship, and infrastructure to help them
              grow and succeed. The incubation Centre support technological
              facilities and advises, network linkages, co-working spaces, lab
              facilities, mentoring, advisory support and initial growth funds
              (mainly from AIC grant to the university).
            </p>
          </div>

          <div className="relative md:w-1/2 w-full mt-8 md:mt-0">
            <img
              src="https://www.gburif.org/images/intro-carousel/dsf8939-b-copy.jpg"
              alt="Library"
              className="rounded-xl shadow-xl w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow-lg text-sm sm:text-base">
              <div className="text-xl sm:text-2xl font-bold">15+</div>
              <div>Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections with IDs */}
      <div id="focus"><Focus /></div>
      <div id="services"><Services /></div>
      <div id="team"><Team /></div>
      <div id="startups"><StartupsCarousel /></div>
      <StartUp />
      <div id="gallery"><ImageGallery /></div>
      <div id="events"><EventSlider /></div>
      <div id="contact"><ContactUs /></div>
    </div>
    </SearchableWrapper>
  );
};

export default Incubation;
