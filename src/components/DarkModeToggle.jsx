import React from "react";
import { Switch } from "@headlessui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeSwitch = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`pointer-events-none relative inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
          enabled ? "translate-x-8" : "translate-x-0"
        }`}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            enabled ? "opacity-0" : "opacity-100"
          }`}
        >
          <FaSun className="h-5 w-5 text-yellow-500" />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            enabled ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaMoon className="h-5 w-5 text-blue-600" />
        </span>
      </span>
    </Switch>
  );
};

export default DarkModeSwitch;
