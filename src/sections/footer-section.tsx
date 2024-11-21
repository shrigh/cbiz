import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { WhiteLines } from "../constants/constant";
import { Fade } from "react-awesome-reveal";

const Footer: React.FC = () => {
  return (
    <Fade delay={300} triggerOnce>
      <div className="font-extralight text-white">
        <div className="space-y-3 px-32 py-20 second-gradient text-white relative overflow-hidden h-[217px] group">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl">Full Width CTA</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus sed minus officiis,
              </p>
            </div>
            <Button className="h-9 bg-[#04773B] hover:bg-[#04773B] z-40 font-extralight">
              Contact Us
            </Button>
          </div>

          {/* Image Wrapping for Hover Effect */}
          <div className="absolute top-0 w-1/2 right-0 h-full overflow-visible">
            {WhiteLines.map((line, index) => (
              <Fade key={line.id} delay={index * 300} triggerOnce>
                <motion.img
                  src={line.img}
                  alt="lines.."
                  animate={{
                    opacity: 1,
                    y: [0, -20],
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
                    repeatCount: 1,
                  }}
                  className={`absolute ${line.offset} -bottom-5 w-full z-10`}
                />
              </Fade>
            ))}
          </div>
        </div>
        <div className="footer-gradient pt-12">
          <div className="w-5/6 mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
              <div>
                <h4 className="font-bold mb-3">Services</h4>
                <ul className="space-y-3">
                  <li>Accounting</li>
                  <li>Tax</li>
                  <li>Advisory</li>
                  <li>Benefits</li>
                  <li>Insurance</li>
                  <li>Technology</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Industries</h4>
                <ul className="space-y-3">
                  <li>Private Client Services</li>
                  <li>Consumer & Industrial Products</li>
                  <li>Real Estate</li>
                  <li>Technology & Life Sciences</li>
                  <li>All Industries</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Insights</h4>
                <ul className="space-y-3">
                  <li>By Industry</li>
                  <li>By Service</li>
                  <li>Trending Topics</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">About</h4>
                <ul className="space-y-3">
                  <li>About Us</li>
                  <li>Leadership</li>
                  <li>Corporate Social Responsibility</li>
                  <li>Locations</li>
                  <li>Client Stories</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Careers</h4>
                <ul className="space-y-3">
                  <li>Careers</li>
                  <li>Experienced Professionals</li>
                  <li>Students</li>
                  <li>Culture</li>
                  <li>Alumni</li>
                  <li>Job Openings</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-xs w-3/4 m-auto pt-6 leading-5">
              CBIZ is a consulting, tax and financial services provider that
              works closely with CBIZ CPAs P.C., an independent CPA firm that
              provides audit, review and other attest services. In certain
              jurisdictions, CBIZ CPA P.C. operates under its previous name,
              Mayer Hoffman McCann. P.C.
            </p>

            <div className="border-2 border-t border-white opacity-20 my-3"></div>

            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center space-y-2">
                <img src="/assets/logo.png" alt="logo.." />
                <p className="text-xs mt-2">©2024 CBIZ. All Rights Reserved.</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="flex space-x-6 text-white">
                  <a href="#" className="hover:opacity-80">
                    <BsLinkedin />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <GrInstagram />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <BsTwitterX />
                  </a>
                </div>
                <p className="text-xs">
                  Privacy Policy | Terms & Conditions | Legal Disclaimer | Help
                </p>
              </div>

              <div>
                <Button className="bg-[#04773B] hover:bg-[#04773B] text-white h-9 font-extralight">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
