import "./navbar.css";
// zustand
import toggleStore from "@/zustand/toggleStore";
import themeStore from "@/zustand/themeStore";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCartShopping,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const { editToggleSidebar } = toggleStore((state) => state);
  const { themeIndex } = themeStore((state) => state);
  // ! handlers
  const handleToggle = () => {
    editToggleSidebar();
  };
  return (
    <>
      <header className="px-[2rem] py-[0.7rem] bg-transparent ">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-[2rem] ">
            <FontAwesomeIcon
              icon={faBars}
              className={`faIcon themIndex__txt-${themeIndex}`}
              onClick={handleToggle}
              role="button"
              aria-label="toggle sidebar"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`faIcon themIndex__txt-${themeIndex}`}
              aria-label="search bar"
            />
          </div>
          <div className="flex space-x-[2rem] ">
            <FontAwesomeIcon
              icon={faCartShopping}
              className={`faIcon themIndex__txt-${themeIndex}`}
              role="button"
              aria-label="cart shopping"
            />
            <FontAwesomeIcon
              icon={faMessage}
              className={`faIcon themIndex__txt-${themeIndex}`}
              role="button"
              aria-label="chat"
            />
            <FontAwesomeIcon
              icon={faBell}
              className={`faIcon themIndex__txt-${themeIndex}`}
              role="button"
              aria-label="notification"
            />
          </div>
        </nav>
      </header>
    </>
  );
}
