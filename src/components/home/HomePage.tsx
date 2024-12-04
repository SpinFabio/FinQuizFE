import React, { useEffect } from "react";
import HomePageMB from "./home-MB/HomePageMB";
import HomePageDT from "./home-DT/HomePageDT";
import { modes, resumeButton } from "./home-MB/useHomePage";
import {
  getAccessTokenPayload,
  verifyAccessTokenPresence,
} from "../../state/access-token/acces-token";
import { LOGIN_PAGE_ROUTE } from "../../config/routes";
import { useNavigate } from "react-router";

interface HomePageProps {
  /* propName: propType */
}

const HomePage: React.FC<HomePageProps> = (
  {
    /* props */
  },
) => {
  let navigate = useNavigate();
  const [userName, setUserName] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const userName = getAccessTokenPayload()?.name;
      console.log(getAccessTokenPayload())
      if (!userName) {
        navigate(LOGIN_PAGE_ROUTE);
      }
      setUserName(userName??"");
    } catch (error) {
      navigate(LOGIN_PAGE_ROUTE);
    }
  }, [navigate]);

  return (
    <>
      <div className="block sm:hidden">
        <HomePageMB
          userName={userName ?? ""}
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
