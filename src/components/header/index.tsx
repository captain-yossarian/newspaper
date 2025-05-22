import React from "react";
import HamburgerMenu from "../hamburger-menu";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="sticky p-2 flex  shadow-lg">
      <div className="flex justify-center items-center p-3">
        <HamburgerMenu />
      </div>

      <div className="md:inline-block hidden  justify-center items-center cursor-pointer" onClick={() => navigate('/')}>
        <img src="./logo.jpg" className="object-cover h-[80px] rounded-[100%]" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        {" "}
        <p className="font-bold text-2xl md:text-7xl">
          <span className="text-red-600">НАРОДНАЯ</span>{" "}
          <span className="text-sky-600">ВОЛЯ</span>{" "}
        </p>
      </div>
    </header>
  );
};
