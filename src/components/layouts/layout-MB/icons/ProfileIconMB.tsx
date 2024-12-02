import React, { useState } from "react";
import ProfileWidget from "../../../Profile/ProfileMB/ProfileWidget";
import ReusableProfileIcon from "./ReusableProfileIcon";
import ModalMB from "../../../wigets/modal/ModalMB";

interface ProfileIconPropsMB {}

const ProfileIconMB: React.FC<ProfileIconPropsMB> = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="z-[1001] flex items-start justify-end">
      <ReusableProfileIcon onActon={() => setModalState(true)} />

      <ModalMB
        isOpen={modalState}
        onClose={() => setModalState(false)}
        type={"appearIn"}
      >
        <ProfileWidget onClose={() => setModalState(false)} />
      </ModalMB>
    </div>
  );
};

export default ProfileIconMB;
