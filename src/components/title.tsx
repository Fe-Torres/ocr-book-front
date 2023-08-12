import { ReactNode } from "react";

type TitleWrapperProps = {
  children: ReactNode;
};

export const TitleWrapper = ({ children }: TitleWrapperProps) => {
  return (
    <>
      <h1 className="text-lg font-semibold text-black">{children}</h1>
    </>
  );
};
