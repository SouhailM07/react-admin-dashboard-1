import "./settingsbtn.css";
// zustand
import themeStore from "@/zustand/themeStore";
// sound-effect
import soundEffect from "sound-effect";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SettingsBtn() {
  const { themeIndex } = themeStore((state) => state);
  //
  const { sound, effects } = soundEffect();
  return (
    <>
      <button
        aria-label="settings button"
        onClick={() => sound(effects.tap1)}
        className={`themeIndex-${themeIndex} z-[10] text-[1.7rem] w-[2.5rem] h-[2.5rem] grid place-items-center rounded-full fixed bottom-[1rem] right-[1.5rem] hover:rotate-[120deg] transition-all duration-200 text-white`}
      >
        <FontAwesomeIcon icon={faGear} className="h-[1.5rem] w-[1.5rem]" />
      </button>
    </>
  );
}
