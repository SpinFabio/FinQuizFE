import React from "react";

interface PageForbidden403Props {
  message?: string; // Messaggio personalizzabile
}

const PageForbidden403: React.FC<PageForbidden403Props> = ({ message }) => {
  return (
    <div className="flex h-screen justify-evenly w-screen flex-col items-center bg-white text-white">
      <div className="text-center bg-orange-400 py-6 border-t-2 border-b-2 border-solid border-orange-500">
        <h1 className="text-h1-mb font-h1-mb">Error 403</h1>
        <h2 className="mt-4 text-h2-mb font-h1-mb">Accesso vietato</h2>
        <p className="mt-2">
          {message ||
            "Non hai i permessi necessari per accedere a questa pagina."}
        </p>
      </div>
      <a
        href="/home"
        className="rounded-lg bg-blue-600 font-h2-mb px-4 py-2 text-primary-contrast transition hover:bg-blue-700"
      >
        Torna alla Homepage
      </a>
    </div>
  );
};

export default PageForbidden403;
