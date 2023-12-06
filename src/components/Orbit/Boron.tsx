import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Boron = ({ Symbol }: { Symbol: string }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <div
        className={`absolute h-[35px] w-[35px] ${
          theme === "dark"
            ? "bg-bg_light_placeholder text-text_secondary"
            : "bg-bg_dark_placeholder text-text_primary"
        } flex justify-center items-center rounded-full`}
      >
        {Symbol}
      </div>
      <div
        className={`absolute h-[70px] w-[70px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        } animate-rotate hover:pause cursor-pointer`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[120px] w-[120px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        } animate-rotate hover:pause cursor-pointer`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(75%_-_1px)] left-[calc(5%_-_1px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(75%_-_1px)] right-[calc(5%_-_1px)]`}
        ></span>
      </div>
    </>
  );
};

export default Boron;
