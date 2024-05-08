import Image from "next/image";
import React from "react";
import styles from './styles.module.css';
import MenuCard from "./MenuCard";


const Menu = () => {
  return (
    <div style={{  background: "var(--gr-4, linear-gradient(54deg, #0091ff 0, #9cfeff 100%))"}}>
    <div className={`${styles.NewAbout_aboutContainer} container pt-40 `} style={{ width: "70%", background: "var(--gr-4, linear-gradient(54deg, #0091ff 0, #9cfeff 100%))"}}>
      <h2 className="text-3xl font-bold pt-2 mb-20  " >
        WHY CHOOSE LENS
        <div className={` ${styles.NewAbout_underline} mx-auto mt-2`}></div>
      </h2>
      <h1 className="text-6xl font-bold pt-2 mb-20 text-center">AI-driven solutions backed by science</h1>
      <h3 className="text-3xl  pt-2 mb-20 text-center text-gray-500">Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</h3>
      <div className="container mb-10" style={{ width: "70%" }}>
        <ul className="grid grid-cols-2 gap-4">
          <li className="text-2xl"><span >✔</span>State-of-the-art solutions</li>
          <li className="text-2xl"> <span >✔</span>Lifetime support & upgrades</li>
          <li className="text-2xl"> <span >✔</span>Fast & Efficient</li>
          <li className="text-2xl"> <span >✔</span>Plug-and-Play</li>
          <li className="text-2xl"><span >✔</span>No extra computation fee</li>
          <li className="text-2xl"><span >✔</span>24x7 Progress Monitoring</li>
          <li className="text-2xl"><span >✔</span>No licensing fee</li>
          <li className="text-2xl"><span >✔</span>Incremental Updates</li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center">
        <MenuCard heading="Exclusive Rights" imageName="blue.webp"/>
        <MenuCard heading="Research Driven" imageName="green.webp"/>
        <MenuCard heading="Plug-and-Play" imageName="red.webp"/>
        <MenuCard heading="Lifetime Support" imageName="yellow.webp"/>
      </div>

    </div>
    </div>
  );
};

export default Menu;
