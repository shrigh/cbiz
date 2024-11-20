import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import SectionOne from "../sections/section-one";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="navbar-component">
        <div className="main h-screen">
          {/* first navbar */}
          <section className="border-b">
            <div className="w-5/6 h-12 m-auto flex space-x-10 justify-end items-center text-sm font-light text-[#001242]">
              <div className="flex gap-x-2 items-center">
                <img src="/assets/phone.png" alt="loading.." />
                <span className="">800.123.4567</span>
              </div>
              <span className="cursor-pointer">Pay Bill</span>
              <span className="cursor-pointer">Investor Relations</span>
              <span className="cursor-pointer">Newsroom</span>
              <span className="cursor-pointer">Events</span>
              <span className="cursor-pointer">Locations</span>
              <div className="flex gap-x-1 items-center">
                <img src="/assets/user.png" alt="user.." />
                <span className="">Log In</span>
              </div>
              <div className="">
                <img src="/assets/search.png" alt="search.." />
              </div>
            </div>
          </section>

          {/* second navbar */}
          <section>
            <div className="flex justify-between items-center w-5/6 m-auto h-20 text-[#001242]">
              <div className="w-28">
                <img src="/assets/cbig-logo.png" alt="logo.." />
              </div>
              <div className="flex space-x-10 items-center">
                <span className="cursor-pointer">Services</span>
                <span className="cursor-pointer">Industries</span>
                <span className="cursor-pointer">Insights</span>
                <span className="cursor-pointer">About</span>
                <span className="cursor-pointer">Careers</span>
                <Button className="bg-[#04773B] hover:bg-[#04773B] font-light h-9">
                  Contact Us
                </Button>
              </div>
            </div>
          </section>

          {/* alert section */}
          {show && (
            <section className="bg-[#04773B]">
              <div className=" text-white font-light flex py-3 items-center space-x-8 w-5/6 m-auto justify-end">
                <span className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  voluptatibus perferendis, velit odio commodi quia esse
                  deserunt architecto accusantium unde.
                </span>
                <div className="text-sm flex items-center gap-x-2">
                  <span>Call to Action</span>
                  <img
                    src="/assets/polygon.png"
                    alt="polygon.."
                    className="cursor-pointer"
                  />
                </div>
                <X
                  className="text-white cursor-pointer"
                  size={18}
                  onClick={() => setShow(!show)}
                />
              </div>
            </section>
          )}

          {/* first section */}
          <SectionOne />
          {/* <FirstSection /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
