import { Meta } from "@storybook/react";
import PillButton from "./PillButton";

export default {
  title: "Atoms/Button",
  component: PillButton,
} as Meta<typeof PillButton>;

export const PillButton_ = () => (
  <PillButton text="32" hasIcon={true} iconUrl="/coin.svg" />
);
