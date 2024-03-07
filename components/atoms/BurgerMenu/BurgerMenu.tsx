import React from "react";

interface BurgerMenuProps {
  onClick?: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <div
      className="block lg:hidden cursor-pointer space-y-1.5"
      onClick={onClick}
    >
      <div className="w-9 h-1.5 bg-black" />
      <div className="w-9 h-1.5 bg-black" />
      <div className="w-9 h-1.5 bg-black" />
    </div>
  );
};

export default BurgerMenu;
