import React, { ReactNode } from "react";
interface PageProps {
  children: ReactNode;
}
export const Page = ({ children }: PageProps) => (
  <div className="p-3 md:p-1 max-w-3xl bg-white justify-center overflow-auto">
    {children}
  </div>
);
