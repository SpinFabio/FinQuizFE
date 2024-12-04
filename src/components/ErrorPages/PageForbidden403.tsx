import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../../config/routes";

interface PageForbidden403Props {
  message?: string; // Messaggio personalizzabile
}

const PageForbidden403: React.FC<PageForbidden403Props> = ({ message }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-evenly bg-my-background text-primary-contrast">
      <div className="flex w-full flex-col items-center justify-center bg-my-orange py-6 text-center">
        <div className="max-w-15 bg-my-orange px-4 py-6 text-center">
          <h1 className="text-h1-mb font-h1-mb">Error 403</h1>
          <h2 className="mt-4 text-h2-mb font-h1-mb">Accesso vietato</h2>
          <p className="mt-2">
            {message ||
              "Non hai i permessi necessari per accedere a questa pagina."}
          </p>
        </div>
      </div>
      <Link to={HOME_PAGE_ROUTE}>
        <p className="rounded-full bg-primary px-5 py-4 font-h2-mb text-primary-contrast transition hover:bg-primary-hover">
          Torna alla Homepage
        </p>
      </Link>
    </div>
  );
};

export default PageForbidden403;
