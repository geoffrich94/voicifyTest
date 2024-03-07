import React from "react";

interface NavlinklistProps {
  children: React.ReactNode;
}

const Navlinklist: React.FC<NavlinklistProps> = ({ children }) => {
  return (
    <ul className="hidden lg:flex flex-row items-center gap-x-8">{children}</ul>
  );
};

export default Navlinklist;
