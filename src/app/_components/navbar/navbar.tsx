"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import React from "react";

export default function MyNavbar() {
  return (
    <div>
      <Navbar
        fluid
        className="bg-gray-700 border-gray-200 dark:bg-gray-900 w-full !px-10 py-10"
      >
        {/* Brand */}
        <NavbarBrand as={Link} href="/" className="max-w-[60%]">
          <span className="font-bold text-5xl text-yellow-300 md:whitespace-normal">
            WASSUP Shopping
          </span>
        </NavbarBrand>

        {/* Toggle (direct child of Navbar!) */}
        <NavbarToggle className="block lg:hidden" />

        {/* Collapse (direct child of Navbar!) */}
        <NavbarCollapse className="">
          <NavbarLink
            className="block py-2 !px-4 text-3xl text-white font-bold"
            href="/"
            as={Link}
            active
          >
            Home
          </NavbarLink>
          <NavbarLink
            className="block py-2 !px-4 text-3xl text-white font-bold"
            as={Link}
            href="/shop"
          >
            Shop
          </NavbarLink>
          <NavbarLink
            className="block py-2 !px-4 text-3xl text-white font-bold"
            as={Link}
            href="/about"
          >
            About Us
          </NavbarLink>
          <NavbarLink
            className="block py-2 !px-4 text-3xl text-white font-bold"
            as={Link}
            href="/request-store"
          >
            Request a Store
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
