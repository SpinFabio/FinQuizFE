import React from "react";
import ProfilePageDT from "./ProfileDT/ProfilePageDT";
import ProfilePageMB from "./ProfileMB/ProfilePageMB";

interface ProfilePageProps {
  /* propName: propType */
}

const ProfilePage: React.FC<ProfilePageProps> = (
  {
    /* props */
  },
) => {
  return (
    <div>
      <div className="block sm:hidden">
        <ProfilePageMB />
      </div>
      <div className="hidden sm:block">
        <ProfilePageDT />
      </div>
    </div>
  );
};

export default ProfilePage;
