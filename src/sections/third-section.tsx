import React from "react";
import { Button } from "@/components/ui/button";

const ThirdSection: React.FC = () => {
  return (
    <>
      <div className="third-component">
        <div className="w-5/6 m-auto font-extralight space-y-20">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/image1.jpg"
                alt="Group discussion"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="">
                <div className="w-10 h-0.5 bg-[#005CFF] my-1"></div>
                <p className="text-[#005CFF] uppercase text-xs font-semibold pb-2">
                  Lorem Ipsum
                </p>
                <h2 className="text-3xl text-[#001242]">
                  H2 Lorem Ipsum Dolor
                </h2>
              </div>
              <p className="text-[#575C5F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <ul className="space-y-2 text-[#575C5F]">
                <li className="flex items-start gap-4">
                  <img
                    src="/assets/tick.png"
                    alt="tick.."
                    className="w-3 h-3 mt-1.5"
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img
                    src="/assets/tick.png"
                    alt="tick.."
                    className="w-3 h-3 mt-1.5"
                  />
                  <p className="text-gray-600">
                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
              <div className="flex gap-4 pt-4">
                <Button
                  className="custom-button relative bg-[#04773B] hover:bg-white hover:text-black text-white flex items-center justify-center
  gap-x-2 border border-transparent overflow-hidden group w-36 h-10 transition-all duration-300 rounded-md hover:rounded-full"
                >
                  <span className="relative z-40 flex items-center justify-center gap-x-2 w-full h-full">
                    learn More
                    <img
                      src="/assets/ellipse.png"
                      alt="ellipse.."
                      className="w-6 h-6 hidden transition-opacity duration-300 group-hover:block"
                    />
                  </span>
                  <div className="absolute inset-0 bg-[#04773B] transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
                </Button>
                <div className="bg-transparent flex items-center space-x-2 px-6">
                  <span className="text-sm font-medium text-[#001242]">
                    Call to Action
                  </span>
                  <img src="/assets/polygon2.png" alt="loading.." />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-3">
              <div className="">
                <div className="w-10 h-0.5 bg-[#005CFF] my-1"></div>
                <p className="text-[#005CFF] uppercase text-xs font-semibold pb-2">
                  Lorem Ipsum
                </p>
                <h2 className="text-3xl text-[#001242]">
                  H2 Lorem Ipsum Dolor
                </h2>
              </div>
              <p className="text-[#575C5F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <ul className="space-y-2 text-[#575C5F]">
                <li className="flex items-start gap-4">
                  <img
                    src="/assets/tick.png"
                    alt="tick.."
                    className="w-3 h-3 mt-1.5"
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img
                    src="/assets/tick.png"
                    alt="tick.."
                    className="w-3 h-3 mt-1.5"
                  />
                  <p className="text-gray-600">
                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
              <div className="flex gap-4 pt-4">
                <Button
                  className="custom-button relative bg-[#04773B] hover:bg-white hover:text-black text-white flex items-center justify-center
  gap-x-2 border border-transparent overflow-hidden group w-36 h-10 transition-all duration-300 rounded-md hover:rounded-full"
                >
                  <span className="relative z-40 flex items-center justify-center gap-x-2 w-full h-full">
                    learn More
                    <img
                      src="/assets/ellipse.png"
                      alt="ellipse.."
                      className="w-6 h-6 hidden transition-opacity duration-300 group-hover:block"
                    />
                  </span>
                  <div className="absolute inset-0 bg-[#04773B] transition-transform duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
                </Button>

                <div className="bg-transparent flex items-center space-x-2 px-6">
                  <span className="text-sm font-medium text-[#001242]">
                    Call to Action
                  </span>
                  <img src="/assets/polygon2.png" alt="loading.." />
                </div>
              </div>
            </div>

            {/* Image with Play Button */}
            <div className="relative">
              <img
                src="/assets/c1.jpg"
                alt="Businessman"
                className="rounded-lg w-full h-80 shadow-md object-cover"
              />
              {/* Play Button */}
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-14">
                <img src="/assets/play-button.png" alt="playButton.." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
