export interface Navlink {
  iconUrl: string;
  text: string;
  isActive: boolean;
}

export const NavbarOptions: Navlink[] = [
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
