"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SelectWallet } from "../wallet/SelectWallet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleCloseModal = () => {
    setShowWalletModal(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent px-6 md:px-12 py-5 flex items-center justify-between z-50">
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
      <div className="hidden md:flex items-center space-x-12 text-lg text-white">
        <Link href="#" className="hover:text-pink-500">
          Home
        </Link>
        <Link href="#" className="hover:text-pink-500">
          About Us
        </Link>
        <Link href="#" className="hover:text-pink-500">
          Contact Us
        </Link>
        <Link href="#" className="hover:text-pink-500 mr-4">
          Sign In
        </Link>
        <button
          className="px-6 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c084fc] transition-all"
          onClick={handleConnectWallet}
        >
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
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 flex flex-col items-center space-y-4 p-6 md:hidden">
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
          <button
            className="w-full px-5 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c084fc] transition-all"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && <SelectWallet onClose={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;
