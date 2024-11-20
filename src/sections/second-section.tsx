import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-sections";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import Footer from "./footer-section";

const SecondSection: React.FC = () => {
  // Ref for tracking the animated container
  const ref = useRef(null);

  // Check if the container is in view
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <>
      <motion.div ref={ref} className="relative w-full">
        <div className="main vector-image-container">
          <div className="pl-[8.5%] flex py-24 space-x-8">
            <div className="font-extralight">
              <h1 className="text-4xl mb-4 text-[#001242]">
                Vedio Lorem <strong className="italic">Ipsum</strong>
              </h1>
              <p className="mb-6 text-[#575C5F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                impedit aliquid tenetur enim officia cum molestiae.
              </p>
              <Button className="bg-[#04773B] hover:bg-[#04773B] text-white px-6 py-2">
                Call to Action
              </Button>
            </div>

            {/* Animated Image Container */}
            <motion.div
              className="relative overflow-hidden"
              initial={{
                clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
              }}
              animate={
                isInView
                  ? { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
                  : {}
              }
              transition={{
                duration: 2,
                ease: [0.83, 0, 0.17, 1],
              }}
            >
              {/* Image */}
              <div className="w-full relative">
                <img
                  src="/assets/h3.jpg"
                  alt="image.."
                  className="rounded-l-lg w-full h-full object-cover"
                />
                {/* Play Button */}
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <img src="/assets/play-button.png" alt="playButton.." />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-[#fcfaf7]">
          {/* All sections */}
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default SecondSection;
