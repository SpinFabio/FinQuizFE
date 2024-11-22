import React from "react";
import BaseProfileIcon from "../../../base-icons/BaseProfileIcon";

interface ProfileIconPropsMB {}

const ProfileIconMB: React.FC<ProfileIconPropsMB> = () => {
  return (
    <div className="z-50 flex items-start justify-end">
      <div className="flex rounded-bl-[42px] bg-gradient-to-b from-primary to-primary-dark p-5">
        <BaseProfileIcon />
      </div>
    </div>
  );
};

export default ProfileIconMB;
