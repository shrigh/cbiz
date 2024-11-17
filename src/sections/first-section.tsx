import { Button } from "@/components/ui/button";
import Polygon2 from "../assets/polygon2.png";
import Ellipse from "../assets/ellipse.png";
import h1Image from "../assets/h1.jpg";
import h2Image from "../assets/h2.jpg";
import React, { useEffect, useState } from "react";

const FirstSection: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loader progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 50);

    if (progress === 100) {
      setBackgroundIndex((prev) => (prev === 0 ? 1 : 0));
    }

    return () => clearInterval(progressInterval);
  }, [progress]);

  return (
    <>
      <div
        className="first-section flex items-center min-h-[calc(100vh-8rem)] transition-all duration-1000 relative"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
              linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
              ${backgroundIndex === 0 ? `url(${h1Image})` : `url(${h2Image})`}
            `,
          backgroundSize: `${100 + progress / 2}%`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="main w-5/6 m-auto relative">
          <div className="grid grid-cols-2">
            <div className="text-[#001242] font-thin space-y-4">
              <h1 className="text-4xl">
                H1 Lorem Ipsum <strong className="italic">Dolor</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                impedit aliquid tenetur enim officia cum molestiae. Quidem,
                molestias? Incidunt commodi sunt obcaecati impedit voluptatum!
                Accusamus?
              </p>
              <div className="btn flex space-x-2">
                <Button className="custom-button relative bg-[#04773B] hover:bg-white hover:text-black text-white flex items-center justify-center gap-x-2 border border-transparent overflow-hidden group hover:w-36 hover:rounded-full hover:border hover:border-black/10 h-10">
                  <span className="relative z-10 flex items-center gap-x-2">
                    About CBIZ
                    <img
                      src={Ellipse}
                      alt="ellipse.."
                      className="w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </span>
                  <div className="absolute inset-0 bg-[#04773B] transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
                </Button>

                <div className="flex items-center gap-x-2 text-sm cursor-pointer hover:bg-slate-100 px-4 rounded-full">
                  <span className="font-medium">Call to Action</span>
                  <img src={Polygon2} alt="action.." />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-36 w-full">
            <div className="flex justify-between items-center font-light w-full">
              <div>
                <div className="w-full h-1.5 rounded-full overflow-hidden">
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
                <span>Lorem Ipsum Nonumy</span>
              </div>
              <div>
                <div className="w-full h-1.5 rounded-full overflow-hidden">
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
                <span>Lorem Ipsum Dolor</span>
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
      </div>
    </>
  );
};

export default FirstSection;
