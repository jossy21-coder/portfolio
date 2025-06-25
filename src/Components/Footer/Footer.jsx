import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaKaggle,
  FaYoutube,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  //Smooth Scroll Function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Aman</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">AM</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "Experience" },
              { name: "Projects", id: "projects" },
              { name: "Education", id: "education" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="bt text-sm sm:text-base my-1 cursor-pointer relative"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Media Icons*/}
          <div className="flex flex-wrap justify-center space-x-4 mt-6">
            {[
              {
                icon: <FaUpwork />,
                link: "https://www.upwork.com/freelancers/~018267dd30abf9c4db",
              },
              {
                icon: <FaFacebook />,
                link: "https://web.facebook.com/amihiret/",
              },
              {
                icon: <FaTwitter />,
                link: "https://x.com/MihiretAmanuel",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/zeaman44/",
              },
              {
                icon: <FaKaggle />,
                link: "https://www.kaggle.com/zeaman44",
              },
              {
                icon: <FaYoutube />,
                link: "https://www.youtube.com/@YomTech44",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-purple-500 hover:-translate-y-2 transition-transform duration-600"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-400 mt-6">
            © 2025 JossyAM21. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
