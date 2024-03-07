import { Meta } from "@storybook/react";
import BurgerMenu from "./BurgerMenu";

export default {
  title: "Atoms/BurgerMenu",
  component: BurgerMenu,
} as Meta<typeof BurgerMenu>;

export const BurgerMenu_ = () => (
  <>
    <p>Please minimise the window to see the BurgerMenu</p>
    <BurgerMenu onClick={() => console.log("Click!")} />
  </>
);
