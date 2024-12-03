import React from 'react';
import HomePageMB from './home-MB/HomePageMB';
import HomePageDT from './home-DT/HomePageDT';
import { modes, resumeButton } from './home-MB/useHomePage';
import { getAccessTokenPayload } from '../../utils/acces-token-utils';

interface HomePageProps {
  /* propName: propType */
}

const HomePage: React.FC<HomePageProps> = ({ /* props */ }) => {
  const userName=getAccessTokenPayload().name
  return (
    <>
      <div className="block sm:hidden">
        <HomePageMB
          userName={userName}
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