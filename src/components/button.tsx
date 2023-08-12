import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="bg-slate-700 w-full max-w-xxs p-2 text-center rounded-md text-slate-50 font-semibold">
      <button className="w-full" onClick={() => onClick()}>
        {children}
      </button>
    </div>
  );
};
