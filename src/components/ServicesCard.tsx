"use client"
import Image from "next/image";
import React from "react";
import styles from './styles.module.css';

interface propsType {
  title: string;
  description: string;
  index:any;
}

const ServicesCard: React.FC<propsType> = ({ title, description ,index}) => {
  const handleHover = () => {
    const bioDiv = document.querySelector(`#bioDiv-${index}`) as HTMLElement;
    if (bioDiv) {
      bioDiv.style.marginLeft = bioDiv.style.marginLeft === "20px" ? "-20px" : "20px";
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg p-4 m-2 hover:bg-blue-200 transition-colors duration-300  " style={{ width: "500px" }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="" >
        <div className={styles.NewServiceCard_headingCont__QkfmB}>
          <div>
            <span className={styles.NewServiceCard_number__FPZAO}>0</span>
            <span className={styles.NewServiceCard_number__FPZAO} >1</span>
          </div>
          <div id={`bioDiv-${index}`} className={`${styles.NewServiceCard_cardHead__JPzMC}`} style={{ border: "none", color: "rgb(1, 201, 155)" }}>{title}</div>
        </div>
        <h5 className={styles.NewServiceCard_cardBody__d0fwE} style={{ border: "none" }}>{description}</h5>
      </div>
    </div>


    // <div className="bg-gray-100 rounded-lg p-4 m-2 w-80" >
    //   <div className={styles.NewServiceCard_headingCont__QkfmB}>
    //     <div>
    //       <span className={styles.NewServiceCard_number__FPZAO}>0</span>
    //       <span className={styles.NewServiceCard_number__FPZAO} >1</span>
    //     </div>
    //     <div className={styles.NewServiceCard_cardHead__JPzMC} style={{ border: "none", color: "rgb(1, 201, 155)" }}>Biometrics</div>
    //   </div>
    //   <h5 className={styles.NewServiceCard_cardBody__d0fwE} style={{ border: "none" }}>Academia-backed &amp; In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</h5>
    // </div>
  );
};

export default ServicesCard;
