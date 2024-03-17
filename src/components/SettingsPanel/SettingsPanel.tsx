import "./settingspanel.css";
// components
import { SettingsBtn } from "@/components";
// hooks
import { useState } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
// zustand
import themeStore from "@/zustand/themeStore";
// shadcn-ui
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function SettingsPanel() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState<boolean>(false);
  const themeOptions = [
    {
      label: "Light",
      func: () => {
        setTheme("light");
        setMode(false);
      },
    },
    {
      label: "Dark",
      func: () => {
        setTheme("dark");
        setMode(true);
      },
    },
  ];
  const { themeIndex, editThemeIndex } = themeStore((state) => state);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <SettingsBtn />
        </SheetTrigger>
        {/* @ts-ignore */}
        <SheetContent className="w-[20rem] max-md:w-full">
          <SheetHeader>
            <SheetTitle>Settings?</SheetTitle>
            <SheetDescription>
              <hr className="SettingsPanel__hr" />
              <h1 className=" font-bold mb-[1rem] dark:text-red-500 ">
                Theme option
              </h1>
              <ul role="list" className="space-y-[0.5rem]">
                {themeOptions.map((e, i) => {
                  return (
                    <li role="listitem" key={i} className="space-x-[1rem]">
                      <input
                        type="radio"
                        name="mode"
                        id={e.label + i}
                        checked={+mode == i}
                        onChange={() => {}}
                      />
                      <label htmlFor={e.label + i} onClick={e.func}>
                        {e.label}
                      </label>
                    </li>
                  );
                })}
              </ul>
              <hr className="SettingsPanel__hr" />
              <h1>Theme colors</h1>
              <ul className="flex space-x-[0.7rem] mt-[1rem]">
                {Array(6)
                  .fill("")
                  .map((_e, i) => {
                    return (
                      <li
                        role="button"
                        key={i}
                        onClick={() => editThemeIndex(i)}
                        className={`cursor-pointer text-white h-[2rem] rounded-full grid place-items-center w-[2rem] themeIndex-${i}`}
                      >
                        {themeIndex == i && <FontAwesomeIcon icon={faCheck} />}
                      </li>
                    );
                  })}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
