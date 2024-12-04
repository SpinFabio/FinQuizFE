import React, { useState } from "react";
import AnimatedButton from "../animated-buttons/AnimatedButton";
import { LOGIN_PAGE_ROUTE } from "../../../config/routes";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/tailwind-utils";
import ModalMB from "./ModalMB";
import { removeAccessToken } from "../../../state/access-token/acces-token";

interface LogoutModalMBProps {
  /* propName: propType */
}

const logoutIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-my-red stroke-[1.5px]"
  >
    <path
      d="M14.6471 7.79998V5.69998C14.6471 5.14302 14.424 4.60888 14.0268 4.21505C13.6297 3.82122 13.091 3.59998 12.5294 3.59998H5.11765C4.55601 3.59998 4.01738 3.82122 3.62024 4.21505C3.22311 4.60888 3 5.14302 3 5.69998V18.3C3 18.8569 3.22311 19.3911 3.62024 19.7849C4.01738 20.1787 4.55601 20.4 5.11765 20.4H12.5294C13.091 20.4 13.6297 20.1787 14.0268 19.7849C14.424 19.3911 14.6471 18.8569 14.6471 18.3V16.2M8.29412 12H21M21 12L17.8235 8.84998M21 12L17.8235 15.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoutModalMB: React.FC<LogoutModalMBProps> = (
  {
    /* props */
  },
) => {
  const className =
    "flex flex-row p-4 rounded-full m-1 items-center-center  border-my-red";
  const iconClassName = "pr-3";
  const [isOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };

  const buttonClass = " p-2 rounded ";
  return (
    <>
      <AnimatedButton maxScale={1.05}>
        <div
          className={classNames(className, "bg-my-background text-my-red")}
          onClick={() => setModalOpen(true)}
        >
          <div className={iconClassName}>{logoutIcon}</div>
          <p>Logout</p>
        </div>
      </AnimatedButton>

      <ModalMB isOpen={isOpen} type="appearIn" onClose={handleClose}>
        <div
          className="flex min-h-screen w-full flex-col items-center justify-center"
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col rounded-3xl border border-my-border-color bg-my-background p-4 px-6"
          >
            <p className="py-4 font-h2-mb">Sei sicuro di voler uscire? </p>
            <div className="flex w-full flex-row justify-between">
              <div
                className={classNames(
                  buttonClass,
                  "border border-primary text-primary",
                )}
                onClick={handleClose}
              >
                No
              </div>
              <Link to={LOGIN_PAGE_ROUTE}>
                <div
                onClick={removeAccessToken}
                  className={classNames(
                    buttonClass,
                    "bg-my-red text-icons",
                  )}
                >
                  Sì, voglio uscire
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ModalMB>
    </>
  );
};

export default LogoutModalMB;
