import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dogxpas",
        "template_adxqg39",
        form.current,
        "rQIazaChc7EgwAMnD"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message Sent Successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message.", error);
          toast.error("Failed to Send Message. Please Try Again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
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
        id="contact"
        className="flex flex-col items-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      >
        <ToastContainer />

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">CONTACT</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            I'd love to hear from you-reach out for any opportunities or
            questions!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white text-center">
            Connect With Me
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>
            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-[orange] py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
