import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MENU_MOCK } from "@data/Data";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      {MENU_MOCK.map((item) => {
        const isActive =
          pathname === item.url ||
          (item.attribute &&
            item.attribute.some((subItem) => pathname === subItem.url));
        return (
          <li
            key={item.id}
            className={`relative mx-3 p-3 uppercase font-bold text-xs group lg:text-base duration-300 ${
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <Link href={item.url}>{item.title}</Link>
            {item.attribute && (
              <div className="absolute lg:top-[1.15rem] top-4 left-full ">
                <svg
                  className={`w-2 h-2 lg:w-3 lg:h-3 text-gray-800 group-hover: duration-300 ${
                    isActive ? "text-orange-500" : "group-hover:text-orange-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </div>
            )}
            {item.attribute && (
              <ul
                className="hidden group-hover:inline-block group-hover:text-black w-full absolute top-full left-0 bg-white z-1 py-5 space-y-3 duration-300 outline-none border-none z-50"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                {item.attribute.map((item) => (
                  <li
                    key={item.id}
                    className={`text-sm p-3 duration-300 w-full ${
                      pathname === item.url
                        ? "text-orange-500 bg-orange-100"
                        : "hover:text-black hover:bg-orange-500"
                    }`}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Navbar;
