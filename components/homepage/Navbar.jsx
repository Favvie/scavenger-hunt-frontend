"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex fixed top-0 left-0 z-50 justify-between items-center px-6 py-5 w-full bg-transparent md:px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/image.png"
          alt="Scavenger Hunt"
          width={170}
          height={48}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden items-center space-x-12 text-lg text-white md:flex">
        <Link href="/" className="hover:text-pink-500">
          Home
        </Link>
        <Link href="/about-us" className="hover:text-pink-500">
          About Us
        </Link>
        <Link href="/contact-us" className="hover:text-pink-500">
          Contact Us
        </Link>
        <Link href="#" className="mr-4 hover:text-pink-500">
          Sign In
        </Link>
        <button className="px-6 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c084fc] transition-all">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#d946ef] text-2xl bg-[#1a1a1a] p-2 rounded"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex absolute left-0 top-16 flex-col items-center p-6 space-y-4 w-full bg-black bg-opacity-95 md:hidden">
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            Home
          </Link>
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            About Us
          </Link>
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            Contact Us
          </Link>
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            Sign In
          </Link>
          <button className="w-full px-5 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c084fc] transition-all">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
