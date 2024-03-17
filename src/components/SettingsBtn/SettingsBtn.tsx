"use client";
import "./settingsbtn.css";
// zustand
import themeStore from "@/zustand/themeStore";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SettingsBtn() {
  const { themeIndex } = themeStore((state) => state);
  return (
    <>
      <div
        role="button"
        aria-label="settings button"
        className={`themeIndex-${themeIndex} z-[10] text-[1.7rem] w-[2.5rem] h-[2.5rem] grid place-items-center rounded-full fixed bottom-[1rem] right-[1.5rem] hover:rotate-[120deg] transition-all duration-200 text-white`}
      >
        <FontAwesomeIcon icon={faGear} className="h-[1.5rem] w-[1.5rem]" />
      </div>
    </>
  );
}
