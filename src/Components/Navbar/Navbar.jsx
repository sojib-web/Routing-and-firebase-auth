import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const links = (
    <>
      <li>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="btn btn-ghost text-xl">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="btn btn-ghost text-xl">
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm p-2 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button
          onClick={() => navigate("/signup")}
          className={`btn btn-outline rounded-2xl btn-sm ${
            pathname === "/signup" ? "text-red-400" : ""
          }`}
        >
          SignUp
        </button>
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className={`btn btn-outline rounded-2xl btn-sm ${
            pathname === "/signin" ? "text-red-400" : ""
          }`}
        >
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
