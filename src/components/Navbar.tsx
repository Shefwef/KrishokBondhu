"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/" className="pr-4">
        <div className="flex items-center">
          <Image
            src="/NavLogo.png"
            width={80}
            height={60}
            alt="Logo"
            className="ml-2 rounded-2xl"
          />
          <span className="text-3xl font-bold text-green-900 custom-font glow-effect-green">
            কৃষক বন্ধু
          </span>
        </div>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-[400] text-slate-950 flex items-center justify-center cursor-pointer transition-all hover:font-bold pb-1.5"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:justify-between lg:items-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={toggleMenu}
        className="inline-block cursor-pointer lg:hidden"
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button inside Menu */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-xl">
          ✖
        </button>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 mt-16 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[16px] font-[400] text-slate-950 flex items-center justify-start cursor-pointer transition-all hover:font-bold"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              {link.label}
            </Link>
          ))}

          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={toggleMenu}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
