import React from "react";
import Logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import Group from "../assets/Group.png";
import { useInView } from "react-intersection-observer";

const Footer: React.FC = () => {
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
        className="font-thin text-white"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="space-y-3 px-36 py-20 font-thin second-gradient text-white relative overflow-hidden h-[217px] w-full group">
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
        </div>
        <div className="footer-gradient py-12">
        <div className="w-5/6 mx-auto px-4">
          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="space-y-2">
                <li>Accounting</li>
                <li>Tax</li>
                <li>Advisory</li>
                <li>Benefits</li>
                <li>Insurance</li>
                <li>Technology</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-3">Industries</h4>
              <ul className="space-y-2">
                <li>Private Client Services</li>
                <li>Consumer & Industrial Products</li>
                <li>Real Estate</li>
                <li>Technology & Life Sciences</li>
                <li>All Industries</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-3">Insights</h4>
              <ul className="space-y-2">
                <li>By Industry</li>
                <li>By Service</li>
                <li>Trending Topics</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold mb-3">About</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Leadership</li>
                <li>Corporate Social Responsibility</li>
                <li>Locations</li>
                <li>Client Stories</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-bold mb-3">Careers</h4>
              <ul className="space-y-2">
                <li>Careers</li>
                <li>Experienced Professionals</li>
                <li>Students</li>
                <li>Culture</li>
                <li>Alumni</li>
                <li>Job Openings</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white opacity-20 my-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Logo and Copyright */}
            <div className="text-center space-y-2">
              <img src={Logo} alt="logo.." />
              <p className="text-xs mt-2">©2024 CBIZ. All Rights Reserved.</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 text-lg">
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
            </div>

            {/* Contact Button */}
            <div>
              <Button className="bg-[#04773B] hover:bg-[#04773B] text-white h-9">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
