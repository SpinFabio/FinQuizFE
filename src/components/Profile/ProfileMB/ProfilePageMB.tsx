import React from "react";
import HomeIconMB from "../../layouts/layout-MB/icons/HomeIconMB";
import { getAccessTokenPayload } from "../../../utils/acces-token-utils";
import ProfileBottonContainer from "./ProfileBottonContainer";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";
import { LOGIN_PAGE_ROUTE } from "../../../config/routes";
import { Link } from "react-router-dom";
import LogoutModalMB from "../../wigets/modal/LogoutModalMB";

interface ProfilePageMBProps {
  /* propName: propType */
}

const logoutIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-red-400 stroke-[1.5]"
  >
    <path
      d="M14.6471 7.79998V5.69998C14.6471 5.14302 14.424 4.60888 14.0268 4.21505C13.6297 3.82122 13.091 3.59998 12.5294 3.59998H5.11765C4.55601 3.59998 4.01738 3.82122 3.62024 4.21505C3.22311 4.60888 3 5.14302 3 5.69998V18.3C3 18.8569 3.22311 19.3911 3.62024 19.7849C4.01738 20.1787 4.55601 20.4 5.11765 20.4H12.5294C13.091 20.4 13.6297 20.1787 14.0268 19.7849C14.424 19.3911 14.6471 18.8569 14.6471 18.3V16.2M8.29412 12H21M21 12L17.8235 8.84998M21 12L17.8235 15.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfilePageMB: React.FC<ProfilePageMBProps> = (
  {
    /* props */
  },
) => {
  const userdata = getAccessTokenPayload();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div id="top-part-profile">
        <HomeIconMB />
      </div>

      <div id="page content">
        <div
          id="user-info"
          className="mb-7 flex h-11 w-full flex-col items-center justify-between text-info"
        >
          <div className="flex flex-col items-center">
            <p className="text-h1-mb font-h2-mb">{userdata.name}</p>
            <p className="text-body-mb leading-3">{userdata.email}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-h1-mb font-h1-mb leading-9"> 86%</p>
            <p className="text-body-mb">di accuratezza </p>
            <p className="text-info-mb font-info-mb leading-3">
              nelle ultime 3 prove
            </p>
          </div>
        </div>

        <div id="buttons-container" className="w-full">
          <ProfileBottonContainer />
        </div>
      </div>
      <div
        id="logout-container"
        className="flex w-full grow flex-col items-center justify-center"
      >
        <LogoutModalMB/>
      </div>
    </div>
  );
};

export default ProfilePageMB;
