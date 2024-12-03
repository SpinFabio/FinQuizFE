import React from "react";
import { classNames } from "../../../utils/tailwind-utils";
import ReusableProfileIcon from "../../layouts/layout-MB/icons/ReusableProfileIcon";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";
import { Link } from "react-router-dom";
import { LOGIN_PAGE_ROUTE, PROFILE_PAGE_ROUTE } from "../../../config/routes";
import LogoutModalMB from "../../wigets/modal/LogoutModalMB";

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
    className="stroke-primary-contrast"
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
    className="stroke-info"
  >
    <path
      d="M4.6875 6.75L11.3596 11.5403C11.7449 11.8168 12.2551 11.8168 12.6404 11.5403L19.3125 6.75M5.25 19H18.75C19.9926 19 21 17.9553 21 16.6667V7.33333C21 6.04467 19.9926 5 18.75 5H5.25C4.00736 5 3 6.04467 3 7.33333V16.6667C3 17.9553 4.00736 19 5.25 19Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const darkModeIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-primary-contrast stroke-none"
  >
    <path d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4625 3.00833 12.6875 3.025C12.9125 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.1208 4.2125 11.7125 4.9875C11.3042 5.7625 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6958 19.025 12.2875C19.7917 11.8792 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0875 20.975 11.3125C20.9917 11.5375 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.02083 6.88333 6.2125 8.05C5.40417 9.21667 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" />
  </svg>
);

const logoutIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6471 7.79998V5.69998C14.6471 5.14302 14.424 4.60888 14.0268 4.21505C13.6297 3.82122 13.091 3.59998 12.5294 3.59998H5.11765C4.55601 3.59998 4.01738 3.82122 3.62024 4.21505C3.22311 4.60888 3 5.14302 3 5.69998V18.3C3 18.8569 3.22311 19.3911 3.62024 19.7849C4.01738 20.1787 4.55601 20.4 5.11765 20.4H12.5294C13.091 20.4 13.6297 20.1787 14.0268 19.7849C14.424 19.3911 14.6471 18.8569 14.6471 18.3V16.2M8.29412 12H21M21 12L17.8235 8.84998M21 12L17.8235 15.15"
      stroke="#FF0000"
      strokeWidth="1.5"
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
        <div
          id="wiget-content"
          className="flex px-8"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex h-full w-full flex-col rounded-b-3xl rounded-tl-3xl border-2 border-info bg-white p-4">
            <AnimatedButton maxScale={maxScale}>
              <Link to={PROFILE_PAGE_ROUTE}>
                <div
                  className={classNames(
                    className,
                    "bg-primary text-primary-contrast",
                  )}
                >
                  <div className={iconClassName}>{profileIconWiget}</div>
                  <p>Profilo</p>
                </div>
              </Link>
            </AnimatedButton>

            <AnimatedButton maxScale={maxScale}>
              <div
                className={classNames(
                  className,
                  "border-2 border-info bg-info stroke-primary-contrast text-primary-contrast",
                )}
              >
                <div className={iconClassName}>{darkModeIcon}</div>
                <p>Modalità Scura</p>
              </div>
            </AnimatedButton>

            <AnimatedButton maxScale={maxScale}>
              <div
                className={classNames(
                  className,
                  "border-2 border-info bg-white text-info",
                )}
              >
                <div className={iconClassName}>{emailIcon}</div>
                <p>Contattaci</p>
              </div>
            </AnimatedButton>

            <LogoutModalMB/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileWidgetMB;
