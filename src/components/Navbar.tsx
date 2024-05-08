"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center relative">
        <Link href="/">
          <Image src="/logo.webp" width={100} height={100} alt="logo" />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <AiOutlineMenu className="text-accent" size={30} />
          </button>
        </div>
        {/* Render menu based on screen size */}
        <div className={`hidden sm:flex sm:flex-col sm:gap-8 sm:items-center sm:absolute sm:right-0 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex gap-8 items-center font-semibold text-[20px]">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                Company
              </Link>
            </li>
            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Render toggle menu for smaller screens */}
      <div className={`fixed top-20 right-0 h-full w-60 bg-white z-10 transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-8 items-center pt-12 pl-6">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              Company
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
