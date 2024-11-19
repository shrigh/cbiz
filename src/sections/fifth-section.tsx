import React from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  image: any;
}

const FifthSection: React.FC = () => {
  const cards = [
    {
      title: "Accounting",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
      image: "/assets/accounting.jpg",
    },
    {
      title: "Tax",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
      image: "/assets/tax.jpg",
    },
    {
      title: "Advisory",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
      image: "/assets/advisory.jpg",
    },
    {
      title: "Benefits",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
      image: "/assets/benefits.jpg",
    },
    {
      title: "Insurance",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
      image: "/assets/insurance.jpg",
    },
    {
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
      image: "/assets/technology.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="text-center mt-24 font-thin">
        <h2 className="text-3xl text-[#001242]">
          H2 Featured <strong className="italic">Services</strong>
        </h2>
        <p className="text-[#575C5F] mt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod <br />
          tempor invidunt ut labore.
        </p>
        <div className="space-x-4 py-5">
          <Button className="h-9 bg-[#001242] hover:bg-[#001242]">
            Services
          </Button>
          <Button variant="outline" className="h-9 text-[#575C5F]">
            Industries
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.5,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-auto"
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="relative w-auto h-[450px] flex flex-col items-center justify-end p-6 font-thin">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient z-10" />

      {/* Card Content */}
      <motion.div
        className="relative z-50 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-lg font-normal">{title}</h3>
        <p className="text-sm my-2">{description}</p>
        <Button className="mt-4 px-4 py-2 bg-[#04773B] hover:bg-[#04773B] font-normal h-9">
          Call to Action
        </Button>
      </motion.div>
    </div>
  );
};
