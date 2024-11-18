import { Button } from "@/components/ui/button";
import Lines from "../assets/lines.png";
import Group from "../assets/Group.png";
import React from "react";
import { motion } from "framer-motion";

const SixthSection: React.FC = () => {
  return (
    <>
      <div className="fifth-section">
        <div className="main font-thin mb-6">
          <div className="grid grid-cols-2">
            {/* first box */}
            <div className="space-y-3 px-40 py-10 first-gradient relative overflow-hidden group">
              <h1 className="text-3xl text-[#001242]">
                CBIZ <strong className="italic">Careers</strong>
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus sed minus officiis,
              </p>
              <Button className="h-9 bg-[#04773B] hover:bg-[#04773B]">
                See Open Jobs
              </Button>

              {/* Image Wrapping for Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Motion Image with Initial Hidden and Scale on Hover */}
                <motion.img
                  src={Lines}
                  alt="lines.."
                  animate={{
                    opacity: 1,
                    scale: 1.5,
                    y: 80,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.5,
                    y: [80, 0],
                    transition: {
                      opacity: { delay: 0.2, duration: 0.1 },
                      scale: { duration: 0.5 },
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.5,
                      y: {
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                      },
                    },
                  }}
                  className="absolute right-0 bottom-0 w-full"
                />
              </div>
            </div>

            {/* second box */}
            <div className="space-y-3 px-40 py-10 second-gradient text-white relative overflow-hidden group">
              <h1 className="text-3xl">
                CBIZ <strong className="italic">Culture</strong>
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus sed minus officiis,
              </p>
              <Button className="h-9 bg-[#04773B] hover:bg-[#04773B]">
                View More
              </Button>
              {/* Image Wrapping for Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Motion Image with Initial Hidden and Scale on Hover */}
                <motion.img
                  src={Group}
                  alt="lines.."
                  animate={{
                    opacity: 1,
                    scale: 1.5,
                    y: 80,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.5,
                    y: [80, 0],
                    transition: {
                      opacity: { delay: 0.2, duration: 0.1 },
                      scale: { duration: 0.5 },
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.5,
                      y: {
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                      },
                    },
                  }}
                  className="absolute right-0 bottom-0 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixthSection;
