import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import styles from './styles.module.css';

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div >
        <div className={` ${styles.background} h-[calc(100vh-120px)] grid items-center`}>
          <div className="space-y-10  w-fit p-24">
            <h2 className="text-4xl sm:text-6xl font-bold" >
              We are at the
              <br />forefront of AI
            </h2>
            <p className="text-gray-700 text-[14px] sm:text-[16px]">
              From Conserving Wildlife to Automatically
              <br />Generating Caricatures–<span className="font-bold"> We Do It All</span>
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-2xl text-[14px] sm:text-[16px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
