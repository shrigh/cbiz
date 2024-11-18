import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import React from "react";
import Img_main from "../assets/img6.jpg";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img4.jpg";
import Img4 from "../assets/img5.jpg";

const Dropdown = ({ placeholder }: { placeholder: string }) => {
  return (
    <Select>
      <SelectTrigger className="w-full md:w-auto border">
        <span className="text-[#575C5F]">{placeholder}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
};

const FourthSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      type: "PRESS RELEASE",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor.",
      image: Img4,
    },
    {
      id: 2,
      type: "REPORT",
      title: "Lorem ipsum dolor sit amet, on diam etur elitr.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: Img3,
    },
    {
      id: 3,
      type: "WHITEPAPER",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: Img2,
    },
    {
      id: 4,
      type: "PRESS RELEASE",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor.",
      image: Img1,
    },
  ];
  return (
    <>
      <div className="fourth-section pt-28">
        <div className="main w-5/6 m-auto font-thin">
          {/* Header */}
          <h2 className="text-3xl mb-4 text-[#001242]">
            <span>H2 Latest </span>
            <strong className="italic">News & Insights</strong>
          </h2>

          {/* Filters */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Dropdown placeholder="Service" />
            <Dropdown placeholder="Industry" />
          </div>

          {/* Main Content */}
          <div className="flex space-x-10">
            {/* Left Section */}
            <div className="w-2/3">
              <div className="overflow-hidden">
                <img
                  src={Img_main}
                  alt="Main Article"
                  className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
                <div className="py-6">
                  <p className="text-xs text-[#005CFF] font-semibold">
                    PRESS RELEASE
                  </p>
                  <h3 className="text-3xl text-[#001242] mb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </h3>
                  <p className="text-[#575C5F]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-1/3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-start space-x-4 mb-4"
                >
                  <img
                    src={article.image}
                    alt={article.type}
                    className="object-cover w-[180px] h-[120px] rounded-xl"
                  />
                  <div className="text-xs space-y-1">
                    <p className=" text-[#005CFF] font-medium">
                      {article.type}
                    </p>
                    <h4 className=" font-semibold text-[#001242]">
                      {article.title}
                    </h4>
                    <p className=" text-[#575C5F] line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
