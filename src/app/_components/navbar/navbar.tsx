"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full p-10 bg-[#333333] flex justify-between items-center">
        <Link href="/">
          <h1 className="brand font-bold text-5xl text-[#ffeb3b]">
            WASSUP Shopping
          </h1>
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="cursor-pointer lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon className="text-4xl" icon={faBars} />
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex">
          <ul className="w-fit flex gap-16 me-3">
            <Link href="/home">
              <li className="text-3xl text-white font-bold">Home</li>
            </Link>
            <Link href="/shop">
              <li className="text-3xl text-white font-bold">Shop</li>
            </Link>
            <Link href="/about">
              <li className="text-3xl text-white font-bold">About Us</li>
            </Link>
            <Link href="/request">
              <li className="text-3xl text-white font-bold">Request a Store</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU (animated) */}
      <div
        className={`
          w-full bg-[#333333] px-5 lg:hidden 
          overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-[500px] py-5" : "max-h-0 py-0"}
        `}
      >
        <ul className="w-full flex flex-col gap-6 items-center">
          <Link href="/home">
            <li className="text-3xl text-white font-bold">Home</li>
          </Link>
          <Link href="/shop">
            <li className="text-3xl text-white font-bold">Shop</li>
          </Link>
          <Link href="/about">
            <li className="text-3xl text-white font-bold">About Us</li>
          </Link>
          <Link href="/request">
            <li className="text-3xl text-white font-bold">Request a Store</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
