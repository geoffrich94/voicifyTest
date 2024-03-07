import { Meta } from "@storybook/react";
import Navlink from "./Navlink";

export default {
  title: "Atoms",
  component: Navlink,
} as Meta<typeof Navlink>;

export const Navlink_ = () => (
  <>
    <Navlink iconUrl="/home.svg" text="Home" isActive={true} />
    <Navlink iconUrl="/home.svg" text="Home" isActive={false} />
  </>
);
