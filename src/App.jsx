import React, { useState, useEffect } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BlurBlob from "./BlurBlob";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 5000); // simulate loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="bg-[#050414]">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative pt-20">
          {loading ? <LoadingSpinner /> : <About />}
          <Navbar />
          {/* <About /> */}
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Testimonials />
          <Contact />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </div>
    </>
  );
};

export default App;
