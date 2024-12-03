import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { HomeLines } from "../constants/constant";

interface CardProps {
  heading: string;
  strongHeading: string;
  description: string;
  buttonContent: string;
  Data: any[];
}

const SixthSection: React.FC = () => {
  return (
    <div className="fifth-section">
      <div className="main font-extralight my-12">
        <div className="grid grid-cols-2">
          {/* First Box */}
          <div className="px-40 py-10 first-gradient relative overflow-hidden cursor-pointer">
            <CardWithLines
              heading="CBIZ"
              strongHeading="Careers"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sed minus officiis."
              buttonContent="See Open Jobs"
              Data={HomeLines}
            />
          </div>

          {/* Second Box */}
          <div className="px-40 py-10 second-gradient text-white relative overflow-hidden cursor-pointer">
            <CardWithLines
              heading="CBIZ"
              strongHeading="Culture"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sed minus officiis."
              buttonContent="View More"
              Data={HomeLines}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;

const CardWithLines: React.FC<CardProps> = ({
  heading,
  strongHeading,
  description,
  buttonContent,
  Data,
}) => {
  const [hovering, setHovering] = useState(false);

  const handleHoverStart = () => setHovering(true);
  const handleHoverEnd = () => setHovering(false);

  return (
    <>
      <h1 className="text-3xl">
        {heading} <strong className="italic">{strongHeading}</strong>
      </h1>
      <p className="text-sm py-3">{description}</p>
      <Button
        className="custom-button my-3 relative bg-[#04773B] hover:bg-white hover:text-black text-white flex items-center justify-center
  gap-x-2 border border-transparent overflow-hidden group w-36 h-10 transition-all duration-300 rounded-md hover:rounded-full font-light"
      >
        <span className="relative z-40 flex items-center justify-center gap-x-2 w-full h-full">
          {buttonContent}
          <img
            src="/assets/ellipse.webp"
            alt="ellipse.."
            className="w-6 h-6 hidden transition-opacity duration-300 group-hover:block"
          />
        </span>
        <div className="absolute inset-0 bg-[#04773B] transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
      </Button>
      {/* Image Wrapping for Hover Effect */}
      <div
        className="absolute top-0 right-0 w-full h-full overflow-hidden"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {Data.map((line, index) => {
          const dynamicOpacity =
            index > 7 ? 1 - (index - 8) * 0.22 : 0.5 + index * 0.1;

          return (
            <Fade key={line.id} delay={index * 300} triggerOnce>
              <motion.img
                key={hovering ? `hovered-${line.id}` : `initial-${line.id}`}
                src={line.img}
                alt="lines"
                animate={{
                  opacity: Math.max(dynamicOpacity, 0),
                  scale: 3,
                  y: hovering ? [0, -20] : [0, -20],
                  transition: {
                    opacity: { delay: 0.2, duration: 0.3 },
                    scale: { duration: 0.3 },
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.3,
                    y: {
                      duration: 3,
                      ease: "linear",
                    },
                  },
                }}
                className={`absolute -left-32 z-10`}
                style={
                  strongHeading === "Careers"
                    ? {
                        filter:
                          "brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(542%) hue-rotate(85deg) brightness(96%) contrast(85%)",
                      }
                    : { filter: "invert(1) brightness(2)" }
                }
              />
            </Fade>
          );
        })}
      </div>
    </>
  );
};
