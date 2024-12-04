import React from "react";
import ProfilePageDT from "./profileDT/ProfilePageDT";
import ProfilePageMB from "./profileMB/ProfilePageMB";

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
