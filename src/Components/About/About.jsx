import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/photo.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Amanuel Mihiret",
            url: "https://amanuelmihiret.vercel.app.com",
            sameAs: ["https://linkedin.com/in/zeaman44"],
            jobTitle: "GenAI Developer",
          })}
        </script>
      </Helmet>

      <section
        id="about"
        className="py-4 px-[7vw] md:px-[5vw] lg:px-[5vw] font-sans mt-16 md:mt-24 lg:mt-4 lg:mb-5"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Meet
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Amanuel Mihiret
            </h2>
            {/* Skills Heading with Typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  "Computer Vision Expert",
                  "Predictive Model Developer",
                  "GenAI Developer",
                  "Python Developer",
                  "Lecturer in IoT",
                  "Freelancer",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>
            {/* About Me Paragraph */}
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              Multidisciplinary tech professional specializing in Generative AI,
              Computer Vision, Predictive Modeling, and Python Development. With
              a strong academic foundation as a Lecturer in IoT and hands-on
              experience as a Freelancer, I build intelligent, data-driven
              solutions that bridge innovation and real-world application.
            </p>
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1GEMgdZ8xXey7boWEQHXa-YKeHUCQ03jk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Aman"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.9)]"
              />
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
