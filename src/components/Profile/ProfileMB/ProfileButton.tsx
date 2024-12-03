import React, { ReactNode } from "react";
import { classNames } from "../../../utils/tailwind-utils";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";

interface ProfileButtonProps {
  type: "full" | "checked" | "empty";
  name: string;
  icon: ReactNode;
  subtitle?: string;
  body?: string;
}

const arrowIcon = (
  <svg
    width="10"
    height="18"
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L9 9L1 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileButton: React.FC<ProfileButtonProps> = ({
  type,
  name,
  icon,
  subtitle,
  body,
}) => {
  let className = "";

  if (type === "full") {
    className = " bg-primary text-primary-contrast";
  } else if (type === "checked") {
    className = " ";
  } else {
    className = " stroke-primary text-primary border-primary bg-white";
  }

  return (
    <AnimatedButton maxScale={1.05}>
      <div
        className={classNames(
          "my-2 flex flex-row items-center justify-between rounded-full border-2 border-primary p-4",
          className,
        )}
      >
        <div className="pr-4">{icon}</div>
        <div className="flex flex-grow flex-col">
          <div>{name}</div>
          <div>{subtitle}</div>
          <div>{body}</div>
        </div>
        <div>{arrowIcon}</div>
      </div>
    </AnimatedButton>
  );
};

export default ProfileButton;
