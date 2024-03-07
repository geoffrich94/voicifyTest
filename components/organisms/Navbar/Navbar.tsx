"use client";

import PillButton from "../../atoms/Button/PillButton";
import Navlink from "../../../components/atoms/Navlink/Navlink";
import Navlinklist from "../../../components/molecules/Navlinklist/Navlinklist";
import BurgerMenu from "../../../components/atoms/BurgerMenu/BurgerMenu";
import { NavbarOptions } from "../../../shared/types/navbar";
import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownNav = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav>
      <div className="w-full flex flex-row px-6 items-center justify-between lg:justify-around lg:gap-x-24 py-4">
        <img src="/logo.svg" alt="Logo" className="cursor-pointer" />
        <BurgerMenu onClick={() => handleDropdownNav()} />
        <Navlinklist>
          {NavbarOptions.map((option, idx) => (
            <Navlink
              key={idx}
              isActive={option.isActive}
              iconUrl={option.iconUrl}
              text={option.text}
            />
          ))}
        </Navlinklist>
        <div className="hidden lg:flex flex-row gap-x-8">
          <PillButton text="32" hasIcon={true} iconUrl="/coin.svg" />
          <img src="/profile.svg" alt="Profile" />
        </div>
      </div>
      <ul className={`lg:hidden bg-white ${dropdownOpen ? "block" : "hidden"}`}>
        <li className="flex flex-row gap-x-8 items-center justify-start px-4 py-4">
          <PillButton text="32" hasIcon={true} iconUrl="/coin.svg" />
          <img src="/profile.svg" alt="Profile" />
        </li>
        {NavbarOptions.map((option, idx) => (
          <Navlink
            key={idx}
            isActive={option.isActive}
            iconUrl={option.iconUrl}
            text={option.text}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
