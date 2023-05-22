import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const ref = useRef(null);

  const [dropdown, setDropdown] = useState(false);
  // const toggleDropdown = () => {
  //   setDropdown(!dropdown);
  // };
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <>
      <div className="text-black body-font bg-sky-100 ">
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
            <Link href={"/tshirts"}>
              {" "}
              <li>TShirt</li>
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
          <div className="pr-5 flex cart cursor-pointer ">
            <a
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              {dropdown && (
                <div
                  onMouseOver={() => {
                    setDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                  className="absolute right-24 bg-sky-300  top-11 rounded-md px-5 w-44"
                >
                  <ul>
                    <Link href="/account">
                      {" "}
                      <a href="">
                        {" "}
                        <li className="py-1 hover:text-sky-400 text-sm">
                          My Account
                        </li>
                      </a>
                    </Link>

                    <Link href="/order">
                      {" "}
                      <a>
                        {" "}
                        <li className="py-1 hover:text-sky-400 text-sm">
                          Order
                        </li>
                      </a>
                    </Link>
                    <a onClick={logout}>
                      {" "}
                      <li className="py-1 hover:text-sky-400 text-sm">
                        LogOut
                      </li>
                    </a>
                  </ul>
                </div>
              )}
              {user.value && (
                <MdAccountCircle className="text-3xl mx-2 text-sky-500" />
              )}
            </a>
            {!user.value && (
              <Link href={"/login"}>
                <button className=" bg-sky-400 px-2 py-1 rounded-md text-sm text-white mx-2">
                  login
                </button>
              </Link>
            )}
            <AiOutlineShoppingCart
              onClick={toggleCart}
              className="text-sky-500 text-3xl"
            />
          </div>
          {/* <button className="inline-flex items-center bg-sky-100 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
        <div
          ref={ref}
          className=" w-72 h-full sidebar absolute top-0 right-0 py-10 px-8 bg-sky-200 translate-transform translate-x-full transform"
        >
          <h2 className="font-bold text-xl text-center">Shoping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute right-2 top-5 cursor-pointer text-2xl text-sky-500"
          >
            <AiFillCloseCircle />
          </span>
          <ul class="list-disc  list-inside font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-2 font-semibold">No item in Cart</div>
            )}
            {Object.keys(cart).map((item) => {
              return (
                <li key={item}>
                  <div className="item flex my-3">
                    <div className="w-2/3 font-semibold">{cart[item].name}</div>
                    <div className="w-1/3 font-semibold items-center justify-center flex text-lg">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].size,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-sky-500"
                      />
                      <span className="mx-2">{cart[item].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].size,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-sky-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex">
            <button className="flex mr-2  mt-8 text-white bg-sky-500 border-0 py-2 px-2 focus:outline-none hover:bg-sky-300 rounded hover:text-sky-800 hover:font-bold text-lg">
              <BsFillBagCheckFill className="m-1 hover:text-sky-800" />
              CheckOut
            </button>
            <button
              onClick={clearCart}
              className="flex mr-1 mt-9  text-white bg-sky-500 border-0 py-3 px-2 focus:outline-none hover:bg-sky-300 rounded hover:text-sky-800 hover:font-bold text-sm"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
