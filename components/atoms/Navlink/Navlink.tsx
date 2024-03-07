import React from "react";

interface NavlinkProps {
  iconUrl: string;
  text: string;
  isActive: boolean;
}

const Navlink: React.FC<NavlinkProps> = ({ iconUrl, text, isActive }) => {
  return (
    <li
      className={`flex flex-row items-center gap-x-3 list-none font-bold cursor-pointer ${
        isActive ? "text-black" : "text-grey"
      } active:text-black px-4 py-4`}
    >
      <img src={iconUrl} alt={text} />
      <a>{text}</a>
    </li>
  );
};

export default Navlink;
