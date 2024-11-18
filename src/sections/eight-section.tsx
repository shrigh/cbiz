import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Group from "../assets/Group.png";
import { Button } from "@/components/ui/button";
import Footer from "./footer-section";

const EightSection: React.FC = () => {
  // Hook to track the section's visibility
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Motion Variants for the reveal animation
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="space-y-3 px-36 py-20 font-thin second-gradient text-white relative overflow-hidden h-[217px] w-full group"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Full Width CTA</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus sed minus officiis,
            </p>
          </div>
          <Button className="h-9 bg-[#04773B] hover:bg-[#04773B] z-50">
            Contact Us
          </Button>
        </div>

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
            className="absolute right-36 bottom-0 w-[36rem]"
          />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default EightSection;
