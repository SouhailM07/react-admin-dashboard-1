import "./settingspanel.css";
// components
import { SettingsBtn } from "@/components";
// hooks
import { useTheme } from "../ThemeProvider/ThemeProvider";
// zustand
import themeStore from "@/zustand/themeStore";
//
import soundEffect from "sound-effect";
// shadcn-ui
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function SettingsPanel() {
  const { setTheme, theme } = useTheme();
  const { sound, effects } = soundEffect();
  const themeOptions = [
    {
      label: "light",
      func: () => {
        setTheme("light");
      },
    },
    {
      label: "dark",
      func: () => {
        setTheme("dark");
      },
    },
    {
      label: "system",
      func: () => {
        setTheme("system");
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
              <RadioGroup
                defaultValue={theme}
                role="list"
                className="space-y-[0.5rem]"
              >
                {themeOptions.map((e, i) => {
                  return (
                    <li
                      role="listitem"
                      className="flex cursor-pointer items-center space-x-2"
                    >
                      <RadioGroupItem value={e.label} id={`r${i}`} />
                      <Label
                        className="capitalize"
                        onClick={() => e.func()}
                        htmlFor={`r${i}`}
                      >
                        {e.label}
                      </Label>
                    </li>
                  );
                })}
              </RadioGroup>
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
                        onClick={() => {
                          editThemeIndex(i);
                          sound(effects.tap1);
                        }}
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
