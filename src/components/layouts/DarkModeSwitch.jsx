import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect } from "react";

function DarkModeSwitch({ enabled, setEnabled }) {
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Simpan ke localStorage
    localStorage.setItem("darkMode", enabled);
  }, [enabled]); // hanya gunakan 'enabled' sebagai dependency

  return (
    <div className="relative">
      <img
        src={LightButton}
        onClick={() => setEnabled(!enabled)}
        alt="Light Mode"
        className={`w-14 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          enabled ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={DarkButton}
        onClick={() => setEnabled(!enabled)}
        alt="Dark Mode"
        className={`w-14 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          enabled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default DarkModeSwitch;
