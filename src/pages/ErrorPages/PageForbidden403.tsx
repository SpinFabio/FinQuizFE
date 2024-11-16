import React from "react";
import { Link } from "react-router-dom";

interface PageForbidden403Props {
  message?: string; // Messaggio personalizzabile
}

const PageForbidden403: React.FC<PageForbidden403Props> = ({ message }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-evenly bg-white text-white">
      <div className="border-b-2 border-t-2 border-solid border-orange-500 bg-orange-400 py-6 text-center">
        <h1 className="text-h1-mb font-h1-mb">Error 403</h1>
        <h2 className="mt-4 text-h2-mb font-h1-mb">Accesso vietato</h2>
        <p className="mt-2">
          {message ||
            "Non hai i permessi necessari per accedere a questa pagina."}
        </p>
      </div>
      <Link to="/home">
        <p className="rounded-lg bg-blue-600 px-4 py-2 font-h2-mb text-primary-contrast transition hover:bg-blue-700">
          Torna alla Homepage
        </p>
      </Link>
    </div>
  );
};

export default PageForbidden403;
