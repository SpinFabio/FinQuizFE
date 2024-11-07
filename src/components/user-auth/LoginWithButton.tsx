import React from "react";

interface LoginWithButtonProps {
  type: "facebook" | "google";
  titletext:string
}

const LoginWithButton: React.FC<LoginWithButtonProps> = ({ type , titletext}) => {
  
  const text = type === "google" ? `${titletext} con Google` : `${titletext} con Facebook`;

  // Icona condizionale in base al tipo
  const Icon =
    type === "google" ? (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-6 w-6"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        ></path>
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        ></path>
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        ></path>
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        ></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#1877F2"
        className="h-6 w-6"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v22.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.892-4.788 4.655-4.788 1.324 0 2.463.099 2.795.143v3.24h-1.917c-1.505 0-1.795.715-1.795 1.762v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    );

  return (
    <button className="gsi-material-button m-1 flex w-full items-center justify-center space-x-2 rounded border-[1px] border-info p-1 hover:bg-slate-100 hover:border-primary">
      <div className="gsi-material-button-icon scale-[50%]">{Icon}</div>
      <span className="gsi-material-button-contents text-body text-info">{text}</span>
    </button>
  );
};

export default LoginWithButton;
