"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface propsType {
 heading:string;
 imageName: string;
}

const MenuCard: React.FC<propsType> = ({ heading,imageName }) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => !prev); // Toggle showImage state after 3-4 seconds
    }, 3500); // Interval set to 3.5 seconds (3500 milliseconds)
    
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 m-2 " style={{ width: "500px" }} >
      <h2 className="text-xl font-bold">{heading}</h2>
      <div style={{ height: showImage ? '300px' : '300px' }}>
      
        {showImage ? (
          <div style={{ height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src={`/${imageName}`}
            alt="Image"
            width={200}
            height={300}
            // layout="responsive"
            // className="rounded-lg my-4 transition-opacity duration-500"
            style={{ opacity: showImage ? 1 : 0 }}
          />
          </div>
        ) : null}
      </div>
      <p className="text-sm text-gray-600">
        Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas.
      </p>
    </div>
  );
};

export default MenuCard;
