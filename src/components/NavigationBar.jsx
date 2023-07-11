import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [hamburger, setHamburger] = useState("menu");
  const [toggleDropDown, setToggleDropDown] = useState(false);

  function onToggleMenu() {
    if (hamburger === "menu") {
      setHamburger("close");
      setToggleDropDown(true);
    } else {
      setHamburger("menu");
      setToggleDropDown(false);
    }
  }

  return (
    <div className="text-white bg-brownc font-google px-6 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex wrap items-center justify-between">
      {/* Logo */}
      {/* Mobile Menu Bar */}

      <div className="flex flex-col md:flex-row">
        <div className="z-20 text-3xl absolute md:static md:text-4xl font-bold md:pr-24">
          ShareHarvest
        </div>

        <div
          className={`duration-400 md:static absolute bg-brownc md:min-h-fit min-h-[20vh] left-0 ${
            toggleDropDown ? "w-screen h-screen" : "top-[-100%]"
          } md:w-auto w-full flex item-center px-8 py-6`}
        >
          {/* Menu */}
          <nav>
            <ul className="text-xl flex flex-col mt-20 md:mt-0 md:flex-row space-y-8 md:space-x-16 md:items-center">
              <li>
                <Link
                  to="/howitworks"
                  className="hover:border-b-4 hover:border-pinkc hover:duration-100"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="hover:border-b-4 hover:border-pinkc hover:duration-100"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contactus"
                  className="hover:border-b-4 hover:border-pinkc hover:duration-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Login and Sign Up */}
        <div
          className={`flex flex-row space-x-4 items-center md:static fixed md:bottom-0 md:left-0 bottom-10 left-20 ${
            toggleDropDown ? " " : "hidden md:block"
          }`}
        >
          <p className="text-xl">
            <a
              href="/"
              className="hover:border-b-4 hover:border-pinkc hover:duration-100"
            >
              Log In
            </a>
          </p>
          <Button>Sign Up</Button>
        </div>
      </div>

      <button type="button" className="md:hidden z-100">
        <ion-icon
          onClick={onToggleMenu}
          name={hamburger}
          className="cursor-pointer md:hidden"
          style={{ fontSize: "3rem" }}
        />
      </button>
    </div>
  );
}
