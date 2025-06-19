import React, { useState } from "react";
import { projects } from "../../constants";
import { Helmet } from "react-helmet-async";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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

      <section
        id="projects"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </p>
        </div>
        {/* Project Grid */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Container */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500 cursor-pointer"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                <div className="w-full flex justify-center bg-gray-900 px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-[40%] w-[95%] object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <div className="lg:p-6 p-6">
                  <h3 className="lg:text-2xl font-bold text-white mb-2 text-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-4 lg:text-base text-xs">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="justify-self-center">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-[orange] text-[#000] lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Work;
