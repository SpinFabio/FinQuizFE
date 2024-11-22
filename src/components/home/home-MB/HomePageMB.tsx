import React from "react";
import { Modes, ResumeButtonInterface } from "./useHomePage";
import CardMode from "./CardMode";
import ResumeButton from "./ResumeButton";
import ProfileIconMB from "../../layouts/layout-MB/icons/ProfileIconMB";

interface HomePageMBProps {
  userName: string;
  modeArray: Modes[];
  resumeButton: ResumeButtonInterface;
}

const HomePageMB: React.FC<HomePageMBProps> = ({
  userName,
  modeArray,
  resumeButton,
}) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <ProfileIconMB />
        <div id="Text-Box" className="item-start mx-5 flex flex-col">
          <h1 className="font-robot fonto-body mt-8 text-h1-mb leading-tight">
            Benvenuto {userName}
          </h1>
          <h2 className="font-roboto text-body-mb font-info-mb">
            Seleziona una modalità:
          </h2>
        </div>

        <div className="mx-4 flex flex-col items-center" id="card-container">
          {modeArray.map((mode: Modes, index: number) => {
            return (
              <CardMode
                key={mode.modeName}
                modeName={mode.modeName}
                linkTo={mode.linkTo}
                appearDelay={index * 100 + 200}
              />
            );
          })}
        </div>
        <div className="my-5 flex h-full flex-grow items-center justify-center">
          <ResumeButton
            buttonText={resumeButton.buttonText}
            linkTo={resumeButton.linkTo}
          />
        </div>
      </div>
    </>
  );
};

export default HomePageMB;
