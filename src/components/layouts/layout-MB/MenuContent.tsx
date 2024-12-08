import React from "react";
import IconMenu from "./icons/IconMenu";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";
import { UseTimerInterface } from "./useTimer";
import { classNames } from "../../../utils/tailwind-utils";
import { MY_BLUR_STYLE } from "../../../config/myenv";

interface MenuContentProps {
  menuHandler: MenuHandler;
}

interface MenuButton {
  onActions: () => void;
  description: string;
  draw: string;
}

export interface MenuHandler {
  handleOptions: () => void;
  handleSaveFav: () => void;
  handleLoadFav: () => void;
  handleReset: () => void;
  handleOpenTimeModal: () => void;
  handleCloseTimeModal: () => void;
  handleStart: () => void;
  timerHook: UseTimerInterface;
}

const MenuContent: React.FC<MenuContentProps> = ({ menuHandler }) => {
  const menuButtons: MenuButton[] = [
    /* {
      onActions: menuHandler.handleOptions,
      description: "opzioni",
      draw: "M2.89999 4.7999L12.5 4.7999M2.89999 11.9999H12.5M12.5 11.9999V14.3999M12.5 11.9999V9.5999M2.89999 19.1999H7.69999M12.5 19.1999L22.1 19.1999M17.3 11.9999H22.1M17.3 4.7999L22.1 4.7999M17.3 4.7999V7.1999M17.3 4.7999V2.3999M8.29999 21.5999V16.7999",
    }, */
    {
      onActions: menuHandler.handleReset,
      description: "resetta",
      draw: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
    },
    {
      onActions: menuHandler.handleOpenTimeModal,
      description: "tempo",
      draw: "M10.1 9.68696L12.6826 13.3043H16.7M20.0007 3.49986L22.5051 6.00421M2.50073 6.49986L5.00508 3.99551M10 2H15M21 13.4286C21 18.1624 17.1944 22 12.5 22C7.80558 22 4 18.1624 4 13.4286C4 8.6947 7.80558 4.85714 12.5 4.85714C17.1944 4.85714 21 8.6947 21 13.4286Z",
    },
  ];

  return (
    <div
      className={classNames(
        "rounded-t--[48px] flex h-auto w-full flex-row items-start justify-between px-5 ",MY_BLUR_STYLE
      )}
    >
      {menuButtons.map((mb, i) => (
        <AnimatedButton key={i}>
          <IconMenu
            key={i}
            draw={mb.draw}
            description={mb.description}
            onAction={mb.onActions}
          />
        </AnimatedButton>
      ))}
    </div>
  );
};

export default MenuContent;
