"use client";

import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => alert("Toggle Mobile Menu")}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
