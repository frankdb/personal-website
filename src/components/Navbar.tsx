"use client";

import React, { useState } from "react";
import { MdOutlineHandshake } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const pathname = usePathname();

  // const linkClassNames = (href: string) =>
  //   pathname === href
  //     ? "bg-green-600 text-white rounded-md px-3 py-2 text-md font-medium"
  //     : "text-gray-600 hover:bg-green-600 hover:text-white rounded-md px-3 py-2 text-md font-medium";

  const handleMobileLinkClick = () => {
    setMobileDropdown(false);
  };

  return (
    <>
      <nav className="bg-gray-900">
        <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg
                  className={`${mobileDropdown ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
                Icon when menu is open.

                Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg
                  className={`${mobileDropdown ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div className="flex flex-row items-center font-bold space-x-2">
                  <Link href="/">
                    <img
                      className="w-12 h-12 rounded-full transition-transform duration-100 ease-in-out transform hover:scale-110"
                      src="/frank_logo.jpg"
                      alt="frank"
                    />
                  </Link>
                  {/* <Link href="/">
                    <div className="text-gray-200 text-lg">FB</div>
                  </Link> */}
                </div>
              </div>
            </div>
            {/* Desktop links - public */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="#about"
                    className="text-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded-md px-3 py-2 text-md font-medium"
                    aria-current="page"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded-md px-3 py-2 text-md font-medium"
                  >
                    Projects
                  </a>
                  <Link
                    href="/#"
                    className="text-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded-md px-3 py-2 text-md font-medium"
                  >
                    Work
                  </Link>
                  <a
                    href="https://xpboost.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded-md px-3 py-2 text-md font-medium"
                  >
                    Blog
                  </a>
                  <a
                    href="https://www.linkedin.com/in/frankbarros/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-700 hover:text-gray-200 text-gray-700 border-2 border-gray-200 hover:border-gray-700 rounded-md px-2 py-2 text-md font-semibold"
                  >
                    Let&apos;s talk
                  </a>
                </div>
              </div>
              {/* Notification bell icon */}
              {/* <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button> */}
              {/* <!-- Profile pic --> */}
              {/* <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setProfileDropDown(!profileDropDown)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div> */}
              {/* <!--
                Profile dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
                --> */}
              {/* <div
                  className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    profileDropDown ? "" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                > */}
              {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              {/* <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={`${!mobileDropdown ? "hidden" : "block md:hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              href="/#"
              className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
              onClick={handleMobileLinkClick}
            >
              About
            </Link>
            <a
              href="#projects"
              className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Projects
            </a>
            <Link
              href="/#"
              className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Work
            </Link>
            <a
              href="https://xpboost.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Blog
            </a>
            <Link
              href="/#"
              className="text-gray-600 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
