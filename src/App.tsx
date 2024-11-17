import React from "react";
import Navbar from "./shared/navbar";
import SecondSection from "./sections/second-section";
import "./css/general.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SecondSection />
    </>
  );
};

export default App;
