import Link from "next/link";
import React from "react";

import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex justify-between items-center gap-16">
        <div className="text-xl sm:text-3xl font-bold text-primary">
          <Link href="#">BURGER ZONE</Link>
        </div>
        <nav className="text-xl font-semibold text-gray-800">
          <ul className="hidden sm:flex justify-between items-center gap-8">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Menu</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-xl font-bold text-gray-800 flex justify-between items-center gap-2">
        <div className="block sm:hidden">
          <VscAccount className="text-[20px]" />
        </div>
        <ul className="hidden sm:flex justify-between items-center gap-2">
          <li>
            <Link href="#" className="bg-primary text-white px-7 py-2 rounded-full">Sign Up</Link>
          </li>
          <li>
            <Link href="#" className="bg-primary text-white px-7 py-2 rounded-full">Login</Link>
          </li>
        </ul>
        <div>
          <Link href="#">
            <IoCartOutline className="text-[20px] sm:text-[30px]" />
          </Link>
        </div>
        <div className="block sm:hidden">
          <FiMenu className="text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
