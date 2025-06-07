"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";
import CustomButton from "../ui/CustomButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  // Handles dropdown open/close for both desktop and mobile
  const handleDropdownToggle = () => {
    setDropdownOpen((open) => !open);
  };

  // Handles closing dropdown with delay (for blur)
  const handleDropdownBlur = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Cancel dropdown close if focus returns
  const handleDropdownFocus = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
  };

  // Close mobile menu when a link is clicked (for better UX)
  const handleMenuLinkClick = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-primary shadow-md w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer" onClick={handleMenuLinkClick}>
          <Image
            src="/logo.png"
            alt="Estudio López Gómez Logo"
            width={80}
            height={80}
            priority={false}
            title="Estudio López Gómez Logo"
          />
        </a>
        {/* Mobile menu button */}
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
          aria-controls="navbar-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Right side button */}
        <div className="hidden lg:flex items-center lg:order-2">
          <button
            className="rounded-full px-6 py-2 font-merriweather font-bold cursor-pointer"
            style={{
              backgroundColor: "#CBA240",
              color: "#183852",
            }}
          >
            Hablá con un abogado
          </button>
        </div>
        {/* Menu */}
        <div
          className={`${
            mobileOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1 mt-4 ml-auto `}
          id="navbar-menu"
        >
          <ul className="flex flex-col font-merriweather font-medium text-white lg:flex-row lg:space-x-8 lg:mt-0 lg:ml-auto">
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary transition-colors font-merriweather cursor-pointer"
                aria-current="page"
                onClick={handleMenuLinkClick}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-la-firma"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary transition-colors font-merriweather cursor-pointer"
                onClick={handleMenuLinkClick}
              >
                Sobre la firma
              </Link>
            </li>
            <li
              className={`relative ${dropdownOpen ? "z-30" : ""}`}
              onFocus={handleDropdownFocus}
              onBlur={handleDropdownBlur}
            >
              <button
                type="button"
                className="flex items-center w-full py-2 pl-3 pr-4 text-white hover:text-secondary transition-colors focus:outline-none font-merriweather cursor-pointer"
                onClick={handleDropdownToggle}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                tabIndex={0}
              >
                Servicios
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown: always absolute for desktop, static for mobile */}
              {(dropdownOpen || (mobileOpen && dropdownOpen)) && (
                <ul
                  className={`${
                    mobileOpen
                      ? "static mt-2 w-full bg-primary"
                      : "absolute left-0 mt-2 w-56"
                  } z-20 text-primary rounded shadow-lg font-merriweather bg-[#183852]`}
                >
                  <li>
                    <Link
                      href="#"
                      className={`block px-4 py-2 hover:bg-secondary hover:text-white transition-colors ${
                        mobileOpen ? "text-white" : "text-primary"
                      } cursor-pointer`}
                      onClick={handleMenuLinkClick}
                    >
                      Derecho penal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`block px-4 py-2 hover:bg-secondary hover:text-white transition-colors ${
                        mobileOpen ? "text-white" : "text-primary"
                      } cursor-pointer`}
                      onClick={handleMenuLinkClick}
                    >
                      Derecho laboral
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`block px-4 py-2 hover:bg-secondary hover:text-white transition-colors ${
                        mobileOpen ? "text-white" : "text-primary"
                      } cursor-pointer`}
                      onClick={handleMenuLinkClick}
                    >
                      Derecho civil
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`block px-4 py-2 hover:bg-secondary hover:text-white transition-colors ${
                        mobileOpen ? "text-white" : "text-primary"
                      } cursor-pointer`}
                      onClick={handleMenuLinkClick}
                    >
                      Periféricas caligráficas
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary transition-colors font-merriweather cursor-pointer"
                onClick={handleMenuLinkClick}
              >
                Contacto
              </Link>
            </li>
            <li>
                <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:text-secondary transition-colors font-merriweather cursor-pointer"
                onClick={handleMenuLinkClick}
              >
                Blog
              </Link>
            </li>
            {/* Mobile "Hablá con un abogado" button */}
            <li className="block lg:hidden mt-2">
              <CustomButton
                className="w-full rounded-full px-6 py-2 font-merriweather font-bold cursor-pointer"
                variant="primary"
                onClick={handleMenuLinkClick}
              >
                Hablá con un abogado
                </CustomButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
