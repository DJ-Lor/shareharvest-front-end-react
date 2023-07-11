import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function CustomDropDown() {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="bg-pinkc hover:bg-pink2c text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Hello Loreli <ChevronDownIcon className="ml-2.5 h-5 w-5 text-white" />
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a href="/" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
          </li>
          <li>
            <a href="/" className="block px-4 py-2 hover:bg-gray-100">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
