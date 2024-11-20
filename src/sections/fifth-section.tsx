import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

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
      <div className="text-center mt-24 font-extralight">
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

      {/* Cards Section */}
      <div className="flex justify-center mt-10">
        {cards.map((card, index) => (
          <Fade delay={index * 400} key={index}>
            <Card {...card} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;

const Card = ({ title, image }: CardProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleHoverStart = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(0%)";
    }
    if (titleRef.current) {
      titleRef.current.style.transform = "translateY(-20px)";
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight = "450px";
      descriptionRef.current.style.transition = "max-height 0.5s ease-in-out";
    }
  };

  const handleHoverEnd = () => {
    if (gradientRef.current) {
      gradientRef.current.style.transform = "translateY(100%)";
    }
    if (titleRef.current) {
      titleRef.current.style.transform = "translateY(0)";
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight = "60px";
      descriptionRef.current.style.transition = "max-height 0.5s ease-in-out";
    }
  };

  return (
    <motion.div
      className="relative group w-auto h-[450px] flex flex-col items-center justify-end p-6 font-extralight overflow-hidden cursor-pointer"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <motion.div className="absolute top-0 left-0 w-full h-full bg-custom-gradient z-10" />

      {/* Hover Gradient Overlay */}
      <motion.div
        ref={gradientRef}
        style={{
          transition: "transform 0.4s ease-in-out",
        }}
        className="absolute top-0 left-0 inset-0 card-gradient text-white p-4"
      ></motion.div>

      {/* Card Content */}
      <div className="relative z-20 text-white">
        <h3
          ref={titleRef}
          className="text-lg font-medium transition-transform duration-500"
        >
          {title}
        </h3>
        <p
          ref={descriptionRef}
          className="text-sm mt-2 mb-4 overflow-hidden line-clamp-14"
          style={{
            maxHeight: "60px",
            transition: "max-height 0.5s ease-in-out",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          veniam dignissimos, praesentium blanditiis quas quidem ipsam labore
          ipsa consequatur assumenda quasi. Accusamus tempora tenetur, officia
          minima explicabo ratione obcaecati animi aspernatur laudantium saepe.
          Quos harum ullam veritatis eum provident beatae voluptate ex
          praesentium quasi vero quidem illum, repellendus numquam mollitia sit
          quisquam assumenda libero non officiis dicta ut incidunt? Doloremque
          labore porro molestias est rem!
        </p>
        <Button className="px-4 py-2 bg-[#04773B] hover:bg-[#035a2b] font-medium">
          Call to Action
        </Button>
      </div>
    </motion.div>
  );
};
