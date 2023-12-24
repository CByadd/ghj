"use client";
import React, { useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { AiFillGithub } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { PiMoonStarsBold } from "react-icons/pi";



import { LiaAtomSolid } from "react-icons/lia";


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`w-full flex justify-between items-center pt-3 pb-2 px-5 text-xl ${
        theme === "dark"
          ? "text-text_primary"
          : "text-text_secondary"
        } bg-opacity-60 backdrop-blur-require`}
    >
      <Link className="text-2xl" href="/">
        <LiaAtomSolid />
      </Link>
      <div className="flex justify-end items-center">
        <Link
          href="https://www.instagram.com/srinivash_cb/"
          target="_blank"
          className="mr-5"
        >
          {/* <AiFillGithub className="text-2xl"  /> */}
    
          
          <h1 className="logos">Srinivash</h1>
          
          
        </Link>
        {theme === "dark" ? (
          <button
            onClick={() => {
              localStorage.setItem("theme", "light");
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            <FiSun className="cursor-pointer" />
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem("theme", "dark");
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            <PiMoonStarsBold className="cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
