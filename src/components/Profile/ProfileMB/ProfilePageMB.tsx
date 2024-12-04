import React from "react";
import HomeIconMB from "../../layouts/layout-MB/icons/HomeIconMB";
import { getAccessTokenPayload } from "../../../state/access-token/acces-token";
import ProfileBottonContainer from "./ProfileBottonContainer";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";
import { LOGIN_PAGE_ROUTE } from "../../../config/routes";
import { Link } from "react-router-dom";
import LogoutModalMB from "../../wigets/modal/LogoutModalMB";

interface ProfilePageMBProps {
  /* propName: propType */
}

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
        <LogoutModalMB />
      </div>
    </div>
  );
};

export default ProfilePageMB;
