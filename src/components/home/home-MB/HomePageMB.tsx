import React, { useEffect } from "react";
import { Modes, ResumeButtonInterface } from "./useHomePage";
import CardMode from "./CardMode";
import ResumeButton from "./ResumeButton";
import ProfileIconMB from "../../layouts/layout-MB/icons/ProfileIconMB";
import AnimatedButton from "../../wigets/animated-buttons/AnimatedButton";
import { checkCurrentQuizzes } from "../../../state/quiz/quiz";
import { verifyAccessTokenPresence } from "../../../state/access-token/acces-token";
import { useNavigate } from "react-router";
import { LOGIN_PAGE_ROUTE } from "../../../config/routes";

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

  
  const isQuizzesArrayPresent = checkCurrentQuizzes();
  return (
    <>
      <div className="flex h-screen flex-col">
        <ProfileIconMB />
        <div
          id="Text-Box"
          className="item-start text-my-text-1  my-6 mx-6  p-4 flex flex-col"
        >
          <h1 className="font-robot fonto-body  text-h1-mb leading-tight">
            Benvenuto {userName}
          </h1>
          <h2 className="font-roboto text-body-mb font-info-mb">
            Seleziona una modalità:
          </h2>
        </div>

        <div id="card-container" className="mx-6 flex flex-col items-center" >
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

        <div className="flex h-full flex-grow items-center justify-center py-5 ">
          {isQuizzesArrayPresent ? (
            <AnimatedButton>
              <ResumeButton
                buttonText={resumeButton.buttonText}
                linkTo={resumeButton.linkTo}
              />
            </AnimatedButton>
          ) : (
            <div className="rounded-full border-2 border-my-green p-4 text-body-mb text-my-green">
              Nessuna prova in memoria
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePageMB;
