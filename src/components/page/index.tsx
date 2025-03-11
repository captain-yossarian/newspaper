import React, { ReactNode } from "react";
interface PageProps {
  children: ReactNode;
}
export const Page = ({ children }: PageProps) => <div className="w-2/3 bg-white">{children}</div>;
