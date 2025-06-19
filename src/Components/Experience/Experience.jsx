import React from "react";
import { experiences } from "../../constants";
import { Helmet } from "react-helmet-async";

const Experience = () => {
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

      <section
        id="experience"
        className="py-24 px-6 sm:px-10 md:px-[7vw] lg:px-[10vw] font-sans clip-path-custom-2"
        style={{
          background:
            "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
        }}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            EXPERIENCE
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
            A collection of my work experience and the roles I have taken in
            various organizations
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 sm:left-1/2 left-4 transform sm:-translate-x-1/2 w-[2px] h-full bg-white z-0"></div>

          {/* Entries */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row sm:items-start items-start mb-20`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 z-10 ${
                  index % 2 === 0
                    ? "sm:left-1/2 sm:-translate-x-1/2"
                    : "sm:left-1/2 sm:-translate-x-1/2"
                } left-4 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center`}
              >
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className={`
            w-full sm:w-1/2 max-w-full sm:px-4 mt-10 sm:mt-0
            ${index % 2 === 0 ? "sm:ml-auto sm:pr-10" : "sm:mr-auto sm:pl-10"}
          `}
              >
                <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm sm:text-base text-gray-300">
                        {experience.company}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {experience.date}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 text-sm sm:text-base">
                    {experience.desc}
                  </p>

                  {/* Skills */}
                  <div className="mt-4">
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-[#8245ec] text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
