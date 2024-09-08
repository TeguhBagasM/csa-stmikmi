import React from "react";
import { Switch } from "@headlessui/react";
import { FaMoon } from "react-icons/fa";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
    <circle cx="32" cy="32" r="16" fill="#FFDD67" />
    <circle cx="24" cy="28" r="2" fill="#664E27" />
    <circle cx="40" cy="28" r="2" fill="#664E27" />
    <path d="M24 36c0 4 8 4 8 0h-8z" fill="#664E27" />
    <g stroke="#FFDD67" strokeWidth="4" strokeLinecap="round">
      <line x1="32" y1="4" x2="32" y2="12" />
      <line x1="32" y1="52" x2="32" y2="60" />
      <line x1="4" y1="32" x2="12" y2="32" />
      <line x1="52" y1="32" x2="60" y2="32" />
      <line x1="11" y1="11" x2="16" y2="16" />
      <line x1="48" y1="48" x2="53" y2="53" />
      <line x1="11" y1="53" x2="16" y2="48" />
      <line x1="48" y1="16" x2="53" y2="11" />
    </g>
  </svg>
);

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
          <SunIcon className="h-5 w-5 text-yellow-500" />
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
