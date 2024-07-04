import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "../atom/logo";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 lg:mb-0">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Branches */}
        <div className="mb-6 lg:mb-0">
          <h4 className="text-xl font-semibold mb-2 text-center">Visit Us</h4>
          <ul className="px-5 lg:px-0 text-center lg:text-left">
            <li className="mb-1">
              <strong>Head Quater:</strong> 1, Church Street, Off Old Olowora
              Road, Isheri, Lagos.
            </li>
            <li>
              <strong>Camp Ground:</strong> 456 Camp Rd, City, Country
            </li>
          </ul>
        </div>

        {/* Social Media Handles */}
        <div className="mb-6 lg:mb-0">
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <FaFacebook
                size={24}
                className="text-white hover:text-gold cursor-pointer"
              />
            </Link>
            <Link href="https://youtube.com">
              <FaYoutube
                size={24}
                className="text-white hover:text-gold cursor-pointer"
              />
            </Link>
            <Link href="https://whatsapp.com">
              <FaWhatsapp
                size={24}
                className="text-white hover:text-gold cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* Donate Button */}
        <div>
          <Link
            href="https://paystack.com/pay/jgacsupport"
            target="_blank"
            className="bg-white text-primary-dark px-6 py-2 rounded hover:bg-gray-200"
          >
            Donate
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
