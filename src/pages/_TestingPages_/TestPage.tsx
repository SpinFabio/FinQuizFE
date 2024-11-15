import HomePageMB from "../HomePage/HomePageMB";
import HomePageDT from "../HomePage/HomePageDT";
import { modes, resumeButton } from "../HomePage/useHomePage";

const TestPage: React.FC = () => {
  
  
  return (
    <>
    <div className="block sm:hidden">
      <HomePageMB resumeButton={resumeButton} userName="Marco" modeArray={modes}/>
    </div>
    <div className="hidden sm:block">
      <HomePageDT />
    </div>
    </>
  );
};

export default TestPage;
