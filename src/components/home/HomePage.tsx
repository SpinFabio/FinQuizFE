import React from 'react';
import HomePageMB from './home-MB/HomePageMB';
import HomePageDT from './home-DT/HomePageDT';
import { modes, resumeButton } from './home-MB/useHomePage';

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