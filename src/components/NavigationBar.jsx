import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

// Hook Import ---
import { useAuth } from "../hooks/useAuth";

export default function NavigationBar() {
  const [hamburger, setHamburger] = useState("menu");
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const { isAuthenticated } = useAuth();

  const auth = useAuth();
  const location = useLocation();

  function onToggleMenu() {
    if (hamburger === "menu") {
      setHamburger("close");
      setToggleDropDown(true);
    } else {
      setHamburger("menu");
      setToggleDropDown(false);
    }
  }

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    auth.logout().finally(() => {
      onToggleMenu();
    });
  };

  return (
    <div className="text-white bg-brownc font-google py-10 md:py-16 lg:py-10 flex wrap">
      {/* Logo */}
      {/* Mobile Menu Bar */}

      <div className="flex h-full w-full flex-col md:flex-row md:items-center">
        <Link to="/" className="text-3xl md:text-4xl font-bold text-light">
          ShareHarvest
        </Link>

        <div
          className={`z-50 duration-400 md:static absolute bg-brownc md:min-h-fit min-h-[20vh] md:flex-1 left-0 md:justify-center ${
            toggleDropDown ? "w-screen h-[200vh] md:h-auto" : "top-[-100%]"
          } md:w-auto w-full flex item-center px-8 py-6`}
        >
          {/* Menu */}

          <nav>
            {isAuthenticated ? (
              <ul className="text-xl flex flex-col mt-20 md:mt-0 md:flex-row space-y-8 md:space-y-0 lg:space-x-20 md:items-center">
                <li>
                  <Link
                    to="/create-listing"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/create-listing"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    Create Listing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/dashboard"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    Search Listings
                  </Link>
                </li>

                <li>
                  <Link
                    to="/listings/mylistings"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/listings/mylistings"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    My Listings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users/info"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/users/info"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="text-xl flex flex-col mt-20 md:mt-0 md:flex-row space-y-8 md:space-y-0 md:space-x-20 md:items-center">
                <li>
                  <Link
                    to="/howitworks"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/howitworks"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/aboutus"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    onClick={onToggleMenu}
                    className={`hover:border-b-4 hover:border-pinkc hover:duration-100 ${
                      location.pathname === "/contactus"
                        ? "border-b-4 border-pinkc"
                        : ""
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>

        {/* Login and Sign Up */}
        <div
          className={`z-50 flex flex-row w-full md:w-auto items-center md:static fixed left-0 md:bottom-0 bottom-10 justify-center  ${
            toggleDropDown ? " " : "hidden md:block"
          }`}
        >
          {isAuthenticated ? (
            <Link
              to="/logout"
              onClick={handleButtonSubmit}
              className="bg-pinkc hover:bg-pink2c text-white text-lg m:text-xl pt-2 pb-1 px-4 rounded-full"
            >
              Log Out
            </Link>
          ) : (
            <div>
              <Link
                to="/login"
                onClick={onToggleMenu}
                className="hover:border-b-4 hover:border-pinkc hover:duration-100 mr-4"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={onToggleMenu}
                className="bg-pinkc hover:bg-pink2c text-white text-lg m:text-xl pt-2 pb-1 px-4 rounded-full"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        className="md:hidden absolute right-4 top-11 z-50"
        onClick={onToggleMenu}
      >
        {hamburger === "menu" ? (
          <Bars3Icon className="text-white h-10 w-10" />
        ) : (
          <XMarkIcon className="text-white h-10 w-10" />
        )}
      </button>
    </div>
  );
}
