import React from "react";
import { Link } from "react-router-dom";

interface Page404Props {
  message?: string;
}

const Page404: React.FC<Page404Props> = ({ message }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-evenly bg-white text-white">
      <div className="flex w-full flex-col items-center justify-center bg-red-400 py-6 text-center">
        <div className="max-w-15 bg-red-400 px-4 py-6 text-center">
          <h1 className="text-h1-mb font-h1-mb">Error 404</h1>
          <h2 className="mt-4 text-h2-mb font-h1-mb">Pagina non trovata</h2>
          <p className="mt-2">
            {message ||
              "La pagina che stai cercando non esiste o è stata rimossa."}
          </p>
        </div>
      </div>

      <Link to="/home">
        <p className="rounded-full bg-primary px-5 py-4 font-h2-mb text-primary-contrast transition hover:bg-blue-800">
          Torna alla Homepage
        </p>
      </Link>
    </div>
  );
};

export default Page404;
