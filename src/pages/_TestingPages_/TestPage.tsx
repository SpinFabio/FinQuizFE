import { MyTestContextProvider } from "./TestHookPage";
import ChildTest from "./ChildTest";

const TestPage: React.FC = () => {


  
  
  return (
    <>
      <div className="bg flex h-screen w-screen items-center justify-center">
        <MyTestContextProvider>
          <ChildTest/>
        </MyTestContextProvider>
      </div>
    </>
  );
};

export default TestPage;
