import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Footer: React.FC = () => {
  const WhiteLines = [
    { id: 3, img: "/assets/white-lines/l-3.png", offset: "right-24" },
    { id: 4, img: "/assets/white-lines/l-4.png", offset: "right-10" },
    { id: 5, img: "/assets/white-lines/l-5.png" },
    { id: 6, img: "/assets/white-lines/l-6.png" },
    { id: 7, img: "/assets/white-lines/l-7.png" },
    { id: 8, img: "/assets/white-lines/l-8.png" },
    { id: 9, img: "/assets/white-lines/l-9.png" },
    { id: 10, img: "/assets/white-lines/l-10.png" },
  ];

  return (
    <Fade delay={300} triggerOnce>
      <div className="font-extralight text-white">
        <div className="space-y-3 px-32 py-20 second-gradient text-white relative overflow-hidden h-[217px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl">Full Width CTA</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus sed minus officiis,
              </p>
            </div>
            <Button
              className="custom-button relative bg-[#04773B] hover:bg-white hover:text-black text-white flex items-center justify-center
  gap-x-2 border border-transparent overflow-hidden group w-36 h-10 transition-all duration-300 rounded-md hover:rounded-full z-40"
            >
              <span className="relative z-40 flex items-center justify-center gap-x-2 w-full h-full">
                Contact Us
                <img
                  src="/assets/ellipse.png"
                  alt="ellipse.."
                  className="w-6 h-6 hidden transition-opacity duration-300 group-hover:block"
                />
              </span>
              <div className="absolute inset-0 bg-[#04773B] transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
            </Button>
          </div>

          {/* Image Wrapping for Hover Effect */}
          <div className="absolute top-0 right-0 h-full overflow-visible w-1/2">
            {WhiteLines.map((line) => (
              <Fade key={line.id} triggerOnce>
                <motion.img
                  src={line.img}
                  alt="lines.."
                  className={`absolute ${line.offset} bottom-2.5 right-0 z-10`}
                />
              </Fade>
            ))}
          </div>
        </div>
        <div className="footer-gradient pt-12 pb-4">
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
