"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

//React icons
import { IoIosArrowBack } from "react-icons/io";

import { sideNavigationItems } from "./SubMenu";
import { classNames } from "../../components/classNames";

const Sidebar = () => {

  const pathname = window.location.pathname;
  const Sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-[11px] font-medium border-b border-slate-300 py-3 mx-3">
          <Image
            alt="logo"
            src="/images/cediIcon.png"
            width={40}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
          <span className="text-xl whitespace-pre">Cedis Manager</span>
        </div>

        {/* sidebar menus  */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
            <li>
              {sideNavigationItems?.map((item) => {
                const isMenuActive =
                  item.href === pathname ||
                  (pathname.includes(item?.href) &&
                    item?.subNavigation &&
                    item?.subNavigation?.length > 0 &&
                    item.subNavigation.some(({ href }: any) =>
                      href.includes(item?.href)
                    ));
                return (
                  <>
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        isMenuActive ? "active" : "link",
                        "link"
                      )}
                    >
                      <span className={isMenuActive ? "active" : "link"}>
                        <item.icon />
                      </span>
                      <span className="ml-3 text-base pt-0.5">{item.name}</span>
                    </Link>

                    {pathname.includes(item?.href) &&
                    item?.subNavigation &&
                    item?.subNavigation?.length > 0
                      ? item?.subNavigation?.map((innerItem) => {
                          return (
                            <Link
                              key={innerItem?.name}
                              href={innerItem.href}
                              className={classNames(
                                innerItem.href === pathname
                                  ? "text-black"
                                  : "text-black",
                                "group flex items-center px-5 py-1.5 text-sm font-normal rounded-l-full"
                              )}
                            >
                              <span className="ml-3 text-base pt-0.5 font-lato border-l-2 border-red-400 border-dashed pl-2">
                                {innerItem?.name}
                              </span>
                            </Link>
                          );
                        })
                      : ""}
                  </>
                );
              })}
            </li>
          </ul>
        </div>

        {/* control button-open & close sidebar */}
        <motion.div
          animate={
            isOpen
              ? { x: 0, y: 0, rotate: 0 }
              : { x: -10, y: -200, rotate: 180 }
          }
          transition={{
            duration: 1,
          }}
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
