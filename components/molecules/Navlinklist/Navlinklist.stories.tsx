import { Meta } from "@storybook/react";
import Navlinklist from "./Navlinklist";
import Navlink from "../../atoms/Navlink/Navlink";

export default {
  title: "Molecules",
  component: Navlinklist,
} as Meta<typeof Navlinklist>;

interface NavOption {
  iconUrl: string;
  text: string;
  isActive: boolean;
}

const NavbarOptions: NavOption[] = [
  {
    iconUrl: "/home.svg",
    text: "Home",
    isActive: true,
  },
  {
    iconUrl: "/voice.svg",
    text: "My Library",
    isActive: false,
  },
  {
    iconUrl: "/head.svg",
    text: "Community",
    isActive: false,
  },
  {
    iconUrl: "/coin.svg",
    text: "Pricing",
    isActive: false,
  },
  {
    iconUrl: "/send.svg",
    text: "Contact",
    isActive: false,
  },
];

export const Navlinklist_ = () => (
  <Navlinklist>
    {NavbarOptions.map((option) => (
      <Navlink
        isActive={option.isActive}
        iconUrl={option.iconUrl}
        text={option.text}
      />
    ))}
  </Navlinklist>
);
