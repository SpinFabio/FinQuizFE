import React, { useEffect, useState } from "react";
import ProfileWidget from "../../../Profile/ProfileMB/ProfileWidget";
import ReusableProfileIcon from "./ReusableProfileIcon";
import ModalAppearInMB from "../../../wigets/modal/ModalAppearInMB";
import SimplePortal from "../../../wigets/SimplePortal";

interface ProfileIconPropsMB {}

const ProfileIconMB: React.FC<ProfileIconPropsMB> = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="z-[1001] flex items-start justify-end">
      <ReusableProfileIcon onActon={() => setModalState(true)} />

        <ModalAppearInMB
          isOpen={modalState}
          onClose={() => setModalState(false)}
        >
          <ProfileWidget onClose={() => setModalState(false)} />
        </ModalAppearInMB>

    </div>
  );
};

export default ProfileIconMB;
