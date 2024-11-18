import React from "react";
import Img from "../assets/h3.jpg";
import Tick from "../assets/tick.png";
import Polygon2 from "../assets/polygon2.png";
import { Button } from "@/components/ui/button";
import PlayButton from "../assets/play-button.png";

const ThirdSection: React.FC = () => {
  return (
    <>
      <div className="third-component">
        <div className="w-5/6 m-auto font-light space-y-20">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={Img}
                alt="Group discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-7">
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
              <ul className="space-y-4 text-[#575C5F]">
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." className="w-3 h-3 mt-2" />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." className="w-3 h-3 mt-2" />
                  <p className="text-gray-600">
                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button className="px-6 py-2 bg-[#04773B] hover:bg-[#04773B] text-white rounded-lg">
                  Learn More
                </Button>
                <div className="bg-transparent flex items-center space-x-2 px-6">
                  <span className="text-sm font-medium text-[#001242]">Call to Action</span>
                  <img src={Polygon2} alt="loading.." className="pt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-7">
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
              <ul className="space-y-4 text-[#575C5F]">
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." className="w-3 h-3 mt-2" />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." className="w-3 h-3 mt-2" />
                  <p className="text-gray-600">
                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button className="px-6 py-2 bg-[#04773B] hover:bg-[#04773B] text-white rounded-lg">
                  Learn More
                </Button>
                <div className="bg-transparent flex items-center space-x-2 px-6">
                  <span className="text-sm font-medium text-[#001242]">Call to Action</span>
                  <img src={Polygon2} alt="loading.." className="pt-1" />
                </div>
              </div>
            </div>

            {/* Image with Play Button */}
            <div className="relative">
              <img
                src={Img}
                alt="Businessman"
                className="rounded-lg w-full h-full object-cover shadow-lg"
              />
              {/* Play Button */}
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-14">
                <img src={PlayButton} alt="playButton.." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
