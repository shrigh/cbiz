import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HomeLines } from "@/constants/constant";
import { Fade } from "react-awesome-reveal";

const SectionOne: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loader progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 40);

    if (progress === 100) {
      setProgress(0);
      setBackgroundIndex((prev) => (prev === 0 ? 1 : 0));
    }
    return () => clearInterval(progressInterval);
  }, [progress]);
  return (
    <>
      <div className="min-h-[calc(100vh-8rem)] relative">
        <div className="grid grid-cols-4 pl-[8.5rem]">
          <div></div>
          <div className="flex items-center absolute z-40 w-2/6 top-[30%]">
            <div className="text-[#001242] font-extralight space-y-4">
              <h1 className="text-4xl">
                H1 Lorem Ipsum{" "}
                <strong className="italic">
                  {backgroundIndex === 0 ? "Nonumy" : "Dolor"}
                </strong>
              </h1>
              <p>
                {backgroundIndex === 0
                  ? "Aenean leo ligla, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus"
                  : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"}
              </p>
              <div className="btn flex space-x-2 pt-4">
                <Button
                  className="custom-button relative bg-[#04773B] hover:bg-white hover:text-black text-white flex items-center justify-center
  gap-x-2 border border-transparent overflow-hidden group w-36 h-10 transition-all duration-300 rounded-md hover:rounded-full"
                >
                  <span className="relative z-40 flex items-center justify-center gap-x-2 w-full h-full font-extralight">
                    About CBIZ
                    <img
                      src="/assets/ellipse.png"
                      alt="ellipse.."
                      className="w-6 h-6 hidden transition-opacity duration-300 group-hover:block"
                    />
                  </span>
                  <div className="absolute inset-0 bg-[#04773B] transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
                </Button>

                <div className="flex items-center gap-x-2 text-sm cursor-pointer hover:bg-slate-100 px-4 rounded-full">
                  <span className="font-medium">Call to Action</span>
                  <img src="/assets/polygon2.png" alt="action.." />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-span-3 custom-height transition-all relative ${
              progress === 0 ? "duration-0" : "duration-1000"
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
                       linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%),
                       ${
                         backgroundIndex === 0
                           ? `url("/assets/h1.png")`
                           : `url("/assets/h2.png")`
                       }`,
              backgroundSize: `${100 + progress / 2.6}%`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Main content */}
            {/* <div
              className={`h-[500px] relative overflow-hidden transition-all border-4 border-red-500 ${
                progress === 0 ? "duration-0" : "duration-1000"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                {HomeLines.map((line, index) => (
                  <Fade key={line.id} delay={index * 300} triggerOnce>
                    <motion.img
                      key={`${line.id}-${backgroundIndex}`}
                      src={line.img}
                      alt="lines"
                      className={`absolute ${line.offset} -bottom-5 z-10`}
                      animate={{
                        opacity: 1,
                        y: [0, 0],
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
                    />
                  </Fade>
                ))}
              </div>
            </div> */}

            {/* Second div with background image */}
            <div
              className="top-0 right-0 absolute w-full h-full"
              style={{
                backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 20%),
      linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 2%),
      ${
        backgroundIndex === 0
          ? `url("/assets/home-2.png")`
          : `url("/assets/home-1.png")`
      }`,
                backgroundSize: `${100 + progress / 8}%`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-8 px-[8.5rem] w-full py-2">
          <div className="flex justify-between items-center font-extralight w-full">
            <div>
              <div className="w-full h-[3px] overflow-hidden">
                {backgroundIndex === 0 && (
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.01s linear",
                    }}
                  ></div>
                )}
              </div>
              <span className={`${backgroundIndex === 0 ? "font-medium" : ""}`}>
                Lorem Ipsum Nonumy
              </span>
            </div>
            <div>
              <div className="w-full h-[3px] overflow-hidden">
                {backgroundIndex === 1 && (
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.01s linear",
                    }}
                  ></div>
                )}
              </div>
              <span className={`${backgroundIndex === 1 ? "font-medium" : ""}`}>
                Lorem Ipsum Dolor
              </span>
            </div>
            <div>
              <span>Lorem Ipsum Set Amet</span>
            </div>
            <div>
              <span>Lorem Ipsum Emet</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
