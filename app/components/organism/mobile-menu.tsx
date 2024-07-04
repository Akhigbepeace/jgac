"use client";

import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate", isButton: true },
];

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (
    isOpen && (
      <div className="md:hidden mt-5 bg-primary">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 text-white hover:bg-primary ${
              link.isButton
                ? "bg-gold text-primary-dark hover:bg-gold-dark"
                : ""
            }`}
            onClick={toggleMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    )
  );
};

export default MobileMenu;
