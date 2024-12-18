import React from "react";
import { classNames } from "../../../utils/tailwind-utils";
import ReusableProfileIcon from "../../layouts/layout-MB/icons/ReusableProfileIcon";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";
import { Link } from "react-router-dom";
import { LOGIN_PAGE_ROUTE, PROFILE_PAGE_ROUTE } from "../../../config/routes";
import LogoutModalMB from "../../wigets/modal/LogoutModalMB";
import ThemeToggle from "../../wigets/theme-toggler/ThemeToggle";

interface ProfileWidgetMBProps {
  onClose: () => void;
}

const profileIconWiget = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-icons"
  >
    <path
      d="M4.3999 18.2C4.86107 17.6835 7.02095 15.3067 7.65391 15.3067H14.3463C15.2635 15.3067 17.1359 17.2769 17.5999 17.9714M20.5999 11C20.5999 16.302 16.3018 20.6 10.9999 20.6C5.69797 20.6 1.3999 16.302 1.3999 11C1.3999 5.69809 5.69797 1.40002 10.9999 1.40002C16.3018 1.40002 20.5999 5.69809 20.5999 11ZM14.4387 7.72798C14.4387 5.89647 12.8926 4.40002 11.0002 4.40002C9.10781 4.40002 7.56164 5.89647 7.56164 7.72798C7.56164 9.55949 9.10781 11.0559 11.0002 11.0559C12.8926 11.0559 14.4387 9.55949 14.4387 7.72798Z"
      strokeWidth="1.6"
    />
  </svg>
);

const emailIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-my-border-color"
  >
    <path
      d="M4.6875 6.75L11.3596 11.5403C11.7449 11.8168 12.2551 11.8168 12.6404 11.5403L19.3125 6.75M5.25 19H18.75C19.9926 19 21 17.9553 21 16.6667V7.33333C21 6.04467 19.9926 5 18.75 5H5.25C4.00736 5 3 6.04467 3 7.33333V16.6667C3 17.9553 4.00736 19 5.25 19Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const ProfileWidgetMB: React.FC<ProfileWidgetMBProps> = ({ onClose }) => {
  const className = "flex flex-row p-4 rounded-full m-1 items-center-center";
  const iconClassName = "pr-3";
  const maxScale = 1.05;
  return (
    <>
      <div className="w-full" onClick={onClose}>
        <div id="top padding" className="z-50 flex items-start justify-end">
          <ReusableProfileIcon onActon={() => {}} />
        </div>
        <div id="wiget-content" className="flex px-8">
          <div
            className="border-my-border-color flex h-full w-full flex-col rounded-b-3xl rounded-tl-3xl border-2 bg-my-background p-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <AnimatedButton maxScale={maxScale}>
              <Link to={PROFILE_PAGE_ROUTE}>
                <div className={classNames(className, "text-icons bg-primary")}>
                  <div className={iconClassName}>{profileIconWiget}</div>
                  <p>Profilo</p>
                </div>
              </Link>
            </AnimatedButton>

            <ThemeToggle />
            
            <AnimatedButton maxScale={maxScale}>
              <div
                className={classNames(
                  className,
                  "border-my-border-color border-2 bg-my-background text-info",
                )}
              >
                <div className={iconClassName}>{emailIcon}</div>
                <p>Contattaci</p>
              </div>
            </AnimatedButton>

            <LogoutModalMB />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileWidgetMB;
