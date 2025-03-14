import React from "react";
import { NAV } from "../../constants/nav";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="w-[300px] p-3 bg-white rounded-lg shadow-lg">
      <ul className="flex flex-col gap-2">
        {NAV.map(({ title, href }) => (
          <li
            key={href}
            className={`rounded-lg  ${
              pathname === href ? "bg-blue-400" : ""
            }  hover:bg-blue-100 cursor-pointer`}
          >
            <Link to={href} className="inline-block w-full p-2">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
