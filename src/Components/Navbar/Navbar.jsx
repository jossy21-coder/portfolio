import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaBriefcase, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <Helmet>
        <title>Amanuel Mihiret</title>
        <meta name="description" content="Explore AI, IoT, and CV projects by Amanuel Mihiret." />
        <meta name="keywords" content="AI, IoT, Computer Vision, Portfolio, Amanuel Mihiret" />
      </Helmet>

      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[5vw] md:px-[7vw] lg:px-[12vw] ${
          isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center flex-wrap gap-4 sm:gap-0">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer flex-shrink-0">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Aman</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">AM</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-gray-300 flex-wrap">
            {menuItems.map((item) => (
              <li key={item.id} className={`relative ${activeSection === item.id ? "text-[orange]" : ""}`}>
                <button className="bt cursor-pointer py-1" onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <a
              href="https://github.com/Zeaman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] hover:-translate-y-1 transition-transform duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~018267dd30abf9c4db"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] hover:-translate-y-1 transition-transform duration-300"
            >
              <FaUpwork size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/zeaman44/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] hover:-translate-y-1 transition-transform duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            {isOpen ? (
              <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#050414] bg-opacity-70 backdrop-blur-md z-50 rounded-lg shadow-lg p-4 lg:hidden">
            <ul className="flex flex-col justify-self-center space-y-4 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.id} className={`relative ${activeSection === item.id ? "text-[orange]" : ""}`}>
                  <button className="cursor-pointer px-2 py-1 text-base" onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex justify-center space-x-4 pt-4">
                <a
                  href="https://github.com/Zeaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~018267dd30abf9c4db"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  <FaUpwork size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zeaman44/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
