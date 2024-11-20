import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { ChevronDown, ChevronUp } from "lucide-react";

const SeventhSection: React.FC = () => {
  return (
    <>
      <div className="min-h-screen font-extralight flex flex-col items-center gap-8 py-16 w-5/6 m-auto">
        <h2 className="text-3xl text-gray-800">
          H2 Lorem Ipsum <strong className="italic">Dolor</strong>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-1">
            <h1 className="font-medium">Client Stories</h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolo aliquyam erat, sed
              diam voluptua. Quaerat non et itaque itaque placeat quis. Quisquam
              tenetur enim nihil et ullam. Tempore dolor sint dolore quo placeat
              et repellendus facilis ducimus. At aut ea aspernatur. Et sed
              dolore aut vero sed quam sit quia.
            </p>
          </div>
          <div className="w-full space-y-4">
            <Dropdown placeholder="Solutions" />
            <Dropdown placeholder="Industry" />
          </div>
        </div>

        <div className="flex gap-6">
          <Card
            image="/assets/img1.jpg"
            title="Lorem Ipsum Dolor Case Study Title"
          />
          <Card
            image="/assets/c1.jpg"
            title="Lorem Ipsum Dolor Case Study Title"
          />
          <Card
            image="/assets/c2.jpg"
            title="Lorem Ipsum Dolor Case Study Title"
          />
        </div>
      </div>
    </>
  );
};

interface CardProps {
  image: any;
  title: string;
}

export default SeventhSection;

const Card = ({ image, title }: CardProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isGradientUp, setIsGradientUp] = useState(false);

  const handleHoverStart = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(0%)";
      setIsGradientUp(true);
    }
  };

  const handleHoverEnd = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(100%)";
      setIsGradientUp(false);
    }
  };

  return (
    <motion.div className="relative group w-96 h-96 rounded-lg overflow-hidden shadow-md">
      <div className="">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Gradient Animation */}
      <div
        ref={gradientRef}
        className="absolute overflow-hidden inset-0 client-card-gradient text-white p-10 space-y-4"
      >
        <h1 className="text-2xl mt-12">Lorem Ipsum Dolor Case Study Title</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          quas explicabo nam ab eaque, velit consequuntur deserunt repellat
          doloremque veniam.
        </p>
        <div className="flex items-center gap-x-2 text-sm font-medium absolute bottom-6">
          <span>View Full Case Study</span>
          <img src="/assets/white-polygon.png" alt="loading.." />
        </div>
        <div className="absolute right-0 -bottom-28">
          <img src="/assets/Group.png" alt="lines.." className="w-[600px] h-[400px] object-cover"/>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="flex flex-col justify-between p-6 z-10 cursor-pointer">
        <div>
          <h3 className="text-2xl">{title}</h3>
        </div>
        <motion.div
          onClick={isGradientUp ? handleHoverEnd : handleHoverStart}
          style={{
            transition: "bottom 0.5s ease-in-out",
          }}
        >
          <div
            className={`absolute left-[45%] z-20 self-center bg-[#04773B] w-10 h-10 rounded-full shadow-lg
                 flex items-center justify-center ${
                   isGradientUp ? "-top-5" : "-bottom-5"
                 }`}
          ></div>
          {isGradientUp ? (
            <ChevronDown
              className={`text-white absolute left-[47%] self-center -bottom-1 z-50 ${
                isGradientUp ? "-top-[96%]" : "-bottom-5"
              }`}
            />
          ) : (
            <ChevronUp
              className={`text-white absolute left-[47%] self-center -bottom-1 z-50 `}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Dropdown = ({ placeholder }: { placeholder: string }) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <span className="text-[#575C5F]">{placeholder}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
};
