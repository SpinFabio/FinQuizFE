import React from 'react';
import { modes, resumeButton } from './useHomePage';
import HomePageMB from './HomePageMB';
import HomePageDT from './HomePageDT';

interface HomePageProps {
  /* propName: propType */
}

const HomePage: React.FC<HomePageProps> = ({ /* props */ }) => {
  return (
    <>
      <div className="block sm:hidden">
        <HomePageMB
          userName="Marco"
          modeArray={modes}
          resumeButton={resumeButton}
        />
      </div>
      <div className="hidden sm:block">
        <HomePageDT />
      </div>
    </>

  );
};

export default HomePage;