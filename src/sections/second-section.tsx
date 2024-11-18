import React from "react";
import { Button } from "@/components/ui/button";
import Img from "../assets/h3.jpg";
import PlayButton from "../assets/play-button.png";
import { motion } from "framer-motion";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-sections";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import EightSection from "./eight-section";
import Footer from "./footer-section";

const SecondSection: React.FC = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="main vector-image-container">
          <div className="pl-[8.5%] flex py-32">
            <div className="font-thin">
              <h1 className="text-4xl font-light mb-4 text-[#001242]">
                Vedio Lorem <strong className="italic">Ipsum</strong>
              </h1>
              <p className="mb-6 text-[#575C5F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                impedit aliquid tenetur enim officia cum molestiae.
              </p>
              <Button className="bg-[#04773B] hover:bg-[#04773B] text-white font-light px-6 py-2">
                Call to Action
              </Button>
            </div>

            {/* Animated Image Container */}
            <motion.div
              className="relative"
              variants={{
                hidden: {
                  scale: 0.01,
                  opacity: 0,
                  x: "100%",
                  y: "100%",
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  x: "0%",
                  y: "0%",
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
              }}
            >
              {/* Image */}
              <div className="w-full relative">
                <img
                  src={Img}
                  alt="image.."
                  className="rounded-l-lg w-full h-full object-cover"
                />
                {/* Play Button */}
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <img src={PlayButton} alt="playButton.." />
                </div>
              </div>
            </motion.div>
          </div>

          {/* all sections */}
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EightSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
