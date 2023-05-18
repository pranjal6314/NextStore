import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <header className="text-black body-font bg-sky-100">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
              <Image height={40} width={200} src="/main-logo.png" alt="" />
            </a>
          </Link>
          <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center p-5 ">
            <Link href={"/"}>
              {" "}
              <li>Home</li>
            </Link>
            <Link href={"/hoodies"}>
              {" "}
              <li>Hoodies</li>
            </Link>
            <Link href={"/mugs"}>
              {" "}
              <li>Mugs</li>
            </Link>
            <Link href={"/contact"}>
              {" "}
              <li>Contact</li>
            </Link>
            <Link href={"/about"}>
              {" "}
              <li>About</li>
            </Link>
          </nav>
          <button className="pr-5">
            <AiOutlineShoppingCart className="text-3xl" />
          </button>
          <button className="inline-flex items-center bg-sky-100 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
