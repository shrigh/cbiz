import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Lines, WhiteLines } from "../constants/constant";

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
          <div className="space-y-3 px-40 py-10 first-gradient relative overflow-hidden cursor-pointer">
            <CardWithLines
              heading="CBIZ"
              strongHeading="Careers"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sed minus officiis."
              buttonContent="See Open Jobs"
              Data={Lines}
            />
          </div>

          {/* Second Box */}
          <div className="space-y-3 px-40 py-10 second-gradient text-white relative overflow-hidden cursor-pointer">
            <CardWithLines
              heading="CBIZ"
              strongHeading="Culture"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sed minus officiis."
              buttonContent="View More"
              Data={WhiteLines}
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
      <p className="text-sm">{description}</p>
      <Button className="h-9 bg-[#04773B] hover:bg-[#04773B] z-20 relative font-extralight">
        {buttonContent}
      </Button>
      {/* Image Wrapping for Hover Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {Data.map((line, index) => (
          <Fade key={line.id} delay={index * 300} triggerOnce>
            <motion.img
              key={hovering ? `hovered-${line.id}` : `initial-${line.id}`}
              src={line.img}
              alt="lines"
              animate={{
                opacity: 1,
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
              className={`absolute ${line.offset} -bottom-5 right-0 z-10`}
            />
          </Fade>
        ))}
      </div>
    </>
  );
};
