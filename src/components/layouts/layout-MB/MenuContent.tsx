import React from "react";
import IconMenu from "./icons/IconMenu";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";

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
  handleTime: () => void;
}

const MenuContent: React.FC<MenuContentProps> = ({ menuHandler }) => {
  const menuButtons: MenuButton[] = [
    {
      onActions: menuHandler.handleOptions,
      description: "opzioni",
      draw: "M2.89999 4.7999L12.5 4.7999M2.89999 11.9999H12.5M12.5 11.9999V14.3999M12.5 11.9999V9.5999M2.89999 19.1999H7.69999M12.5 19.1999L22.1 19.1999M17.3 11.9999H22.1M17.3 4.7999L22.1 4.7999M17.3 4.7999V7.1999M17.3 4.7999V2.3999M8.29999 21.5999V16.7999",
    },
    {
      onActions: menuHandler.handleSaveFav,
      description: "salva ",
      draw: "M7.4375 19.875V14.8125C7.4375 14.1912 7.94118 13.6875 8.5625 13.6875H16.4375C17.0588 13.6875 17.5625 14.1912 17.5625 14.8125V20.4375M15.3125 7.5L8.5625 7.5C7.94118 7.5 7.4375 6.99632 7.4375 6.375L7.4375 3M20.9351 6.93513L17.5649 3.56487C17.2032 3.20319 16.7127 3 16.2012 3H5.42857C4.36344 3 3.5 3.86344 3.5 4.92857V19.0714C3.5 20.1366 4.36344 21 5.42857 21H19.5714C20.6366 21 21.5 20.1366 21.5 19.0714V8.29883C21.5 7.78734 21.2968 7.2968 20.9351 6.93513Z",
    },
    {
      onActions: menuHandler.handleLoadFav,
      description: "carica ",
      draw: "M9.2899 6.48395H14.7066M12 15.1936L17.6669 20.2558C17.9891 20.5436 18.5 20.3149 18.5 19.8829V5C18.5 3.89543 17.6046 3 16.5 3H7.5C6.39543 3 5.5 3.89543 5.5 5V19.8829C5.5 20.3149 6.01092 20.5436 6.3331 20.2558L12 15.1936Z",
    },
    {
      onActions: menuHandler.handleReset,
      description: "resetta",
      draw: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
    },
    {
      onActions: menuHandler.handleTime,
      description: "tempo",
      draw: "M10.1 9.68696L12.6826 13.3043H16.7M20.0007 3.49986L22.5051 6.00421M2.50073 6.49986L5.00508 3.99551M10 2H15M21 13.4286C21 18.1624 17.1944 22 12.5 22C7.80558 22 4 18.1624 4 13.4286C4 8.6947 7.80558 4.85714 12.5 4.85714C17.1944 4.85714 21 8.6947 21 13.4286Z",
    },
  ];

  return (
    <div className="flex h-auto w-full flex-row items-start justify-evenly rounded-t-[3rem] bg-gradient-to-b from-primary to-primary-dark">
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
