import React from "react";

interface Page404Props {
  message?: string; 
}

const Page404: React.FC<Page404Props> = ({ message }) => {
  return (
    <div className="flex h-screen justify-evenly w-screen flex-col items-center  bg-white text-white">
      <div className="text-center  bg-red-400 py-6 border-t-2 border-b-2 border-solid border-red-500">
        <h1 className="text-h1-mb font-h1-mb">Error 404</h1>
        <h2 className="mt-4 text-h2-mb font-h1-mb">Pagina non trovata</h2>
        <p className="mt-2 ">
          {message ||
            "La pagina che stai cercando non esiste o è stata rimossa."}
        </p>
      </div>
      <a
        href="/home"
        className=" rounded-lg  bg-blue-600 font-h2-mb px-4 py-2 text-primary-contrast transition hover:bg-blue-700"
      >
        Torna alla Homepage
      </a>
    </div>
  );
};

export default Page404;
