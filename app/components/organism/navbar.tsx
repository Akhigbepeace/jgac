"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";
import Logo from "../atom/logo";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "What We Do" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate", isButton: true },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  const logo = "/assets/images/logo.png";

  return (
    <nav className="p-4 z-10 bg-white shadow-xl sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary-dark text-2xl font-bold">
          <Link href="/">
            {/* <Logo /> */}
            <div className="relative w-16 h-16 ">
              <Image src={logo} alt="Logo" fill />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex space-x-5">
          {links.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg px-4 py-2 rounded-md  ${
                pathName === link.href
                  ? "font-semibold bg-primary-dark text-white"
                  : "text-primary-dark hover:bg-purple-100 hover:text-primary-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            href="https://paystack.com/pay/jgacsupport"
            target="_blank"
            className="bg-gold text-primary-dark bold px-4 py-2 rounded hover:bg-gold-dark text-lg"
          >
            Donate
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-dark focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
