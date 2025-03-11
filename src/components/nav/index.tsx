import React from "react";
import { NAV } from "../../constants/nav";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="w-[300px] p-3">
      <ul className="flex flex-col gap-2">
        {NAV.map(({ label, value }) => (
          <li
            key={value}
            className={`${
              pathname === value ? "bg-blue-400" : ""
            }  hover:bg-blue-100 cursor-pointer`}
          >
            <Link to={value} className="inline-block w-full p-3">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
