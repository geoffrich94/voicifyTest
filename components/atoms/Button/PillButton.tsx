import React from "react";

interface PillButtonProps {
  text: string;
  hasIcon: boolean;
  iconUrl?: string;
}

const PillButton: React.FC<PillButtonProps> = ({ text, hasIcon, iconUrl }) => {
  return (
    <button className="flex flex-row items-center gap-x-2 py-2 px-4 rounded-full bg-purple--light text-purple--dark font-bold">
      {hasIcon ? <img src={iconUrl} /> : null}
      {text}
    </button>
  );
};

export default PillButton;
