import React from "react";
import { authFetch } from "../../utils/fetch-utils";
import { BE_DOMAIN } from "../../config/myenv";
import { toast } from "react-toastify";

interface TestBEProps {
  /* propName: propType */
}

const TestBE: React.FC<TestBEProps> = (
  {
    /* props */
  },
) => {
  async function myReq() {
    try {
      const data = await authFetch(BE_DOMAIN + "/api/test", "POST");
      console.log(data);
      toast.warning(JSON.stringify(data));
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("errore generico");
      }
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <div className="">
        <h1>pagina test BE</h1>
        <div
          onClick={() => {
            myReq();
          }}
          className="rounded-full bg-my-green p-4"
        >
          fai una richiesta
        </div>
      </div>
    </div>
  );
};

export default TestBE;
