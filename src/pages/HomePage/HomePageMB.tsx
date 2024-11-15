import React from "react";
import { Modes, ResumeButtonInterface } from "./useHomePage";
import CardMode from "../../components/home-mobile/CardMode";
import ResumeButton from "../../components/home-mobile/ResumeButton";

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
    <div className="flex h-screen flex-col">
      <div id="Text-Box" className="item-start mx-5 flex flex-col">
        <h1 className="font-robot text-h1-mb fonto-body leading-tight">
          Benvenuto {userName}
        </h1>
        <h2 className="font-roboto text-body-mb font-info-mb">
          Seleziona una modalità:
        </h2>
      </div>

      <div className="mx-4 flex flex-col items-center " id="card-container">
        {modeArray.map((mode: Modes) => {
          return (
            <CardMode
              key={mode.modeName}
              modeName={mode.modeName}
              linkTo={mode.linkTo}
            />
          );
        })}
      </div>
      <div className="flex h-full my-5 items-center justify-center flex-grow">
        <ResumeButton
          buttonText={resumeButton.buttonText}
          linkTo={resumeButton.linkTo}
        />
      </div>
    </div>
  );
};

export default HomePageMB;
