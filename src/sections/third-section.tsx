import React from "react";
import Img from "../assets/h3.jpg";
import Tick from "../assets/tick.png";
import Polygon2 from "../assets/polygon2.png";
import { Button } from "@/components/ui/button";

const ThirdSection: React.FC = () => {
  return (
    <>
      <div className="third-component">
        <div className="w-5/6 m-auto font-light space-y-16">
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
            <div className="space-y-6">
              <p className="text-sm text-[#0060B1] uppercase">Lorem Ipsum</p>
              <h2 className="text-3xl text-gray-800">H2 Lorem Ipsum Dolor</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." />
                  <p className="text-gray-600">
                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button className="px-6 py-2 bg-green-600 text-white rounded-lg">
                  Learn More
                </Button>
                <div className="bg-transparent flex items-center space-x-2 px-6">
                  <span>Call to Action</span>
                  <img src={Polygon2} alt="loading.." />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-sm text-[#0060B1] uppercase">Lorem Ipsum</p>
              <h2 className="text-3xl text-gray-800">H2 Lorem Ipsum Dolor</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img src={Tick} alt="tick.." />
                  <p className="text-gray-600">
                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
                  Learn More
                </button>
                <button className="px-6 py-2 bg-transparent text-green-600 border border-green-600 rounded-lg flex items-center">
                  Call to Action <span className="ml-2">►</span>
                </button>
              </div>
            </div>

            {/* Image with Play Button */}
            <div className="relative">
              <img
                src={Img}
                alt="Businessman"
                className="rounded-lg w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
