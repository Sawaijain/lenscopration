import Image from "next/image";
import React from "react";
import styles from './styles.module.css';

const Featured = () => {
  return (
    <div className={`${styles.NewAbout_aboutContainer} container pt-40 `}>
      <h2 className="text-6xl font-bold pt-2 mb-20  " >
        About Us
        <div className={` ${styles.NewAbout_underline} mx-auto mt-2`}></div>
      </h2>
      <div className={`${styles.NewAbout_aboutContent} flex flex-col md:flex-row`}>
        <div className="md:w-1/2 md:order-2 justify-content-end ">
          <Image src="./aboutLatest.png" alt="Image" height={100} width={100}  />
        </div>
        <div className="md:w-1/2 "> {/* Left side for heading and content */}
          <h1 className="text-5xl font-bold mb-20 mt-10" >Welcome To LENS</h1>
          <div className="w-2/3 text-gray-600 text-lg mb-20">We put our hearts, souls, and sweat into designing and developing custom AI-powered solutions for your business so you don&rsquo;t have to.</div>
          <button className="border border-black text-black px-6 py-2 rounded-2xl text-[14px] sm:text-[20px]">
            Learn More
          </button>

        </div>
      </div>


    </div>
  );
};

export default Featured;
