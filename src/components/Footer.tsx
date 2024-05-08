import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="pt-40 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <div className="space-y-4">
            <Image src="/logo.webp" width={100} height={100} alt="logo" />
            <h2 className="text-xl font-bold">Tomorrow's Vision, Today!</h2>
            <div className="flex gap-8 text-accent text-2xl pt-16">
              <FaFacebookF />
              <BsTwitter />
              <BsPinterest />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">SITEMAP</h2>
          <p className="leading-[1.8]">MakeMyWeb.</p>
          <p className="leading-[1.8]">MakeMyWeb.</p>
          <p className="leading-[1.8]">MakeMyWeb.</p>
          <p className="leading-[1.8]">MakeMyWeb.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">CONNECT</h2>

          <ul className="space-y-2">
            <li>+1-517-9300-792</li>
            <li>+91-9990-736-796</li>
            <li>solutions@lenscorp.ai</li>
          
          </ul>
        </div>


      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
