import "./mysidebar.css";
// next
import { Link } from "react-router-dom";
// zustand
import toggleStore from "@/zustand/toggleStore";
import themeStore from "@/zustand/themeStore";
// hooks
import { useState } from "react";
// ! arrays
import { arrOfSidebarLinks } from "@/arrays";
// shadcn-ui
import { ScrollArea } from "@/components/ui/scroll-area";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function MySidebar() {
  const { toggleSidebar, editToggleSidebar } = toggleStore((state) => state);
  const [selectedLink, setSelectedLink] = useState({ bar: 0, link: 0 });
  const { themeIndex } = themeStore((state) => state);
  // ! handlers
  const handleToggle = () => editToggleSidebar();

  return (
    <>
      {toggleSidebar && (
        <aside id="MySidebar">
          <ScrollArea className=" h-screen py-[0.7rem]">
            <article className="flex items-center justify-between pr-[1rem] mb-[2rem]">
              <h1 className="font-bold ">Shoppy</h1>
              <FontAwesomeIcon
                icon={faCircleXmark}
                role="button"
                className="text-primaryCyan lg:hidden h-[1rem] w-[1rem]"
                onClick={handleToggle}
              />
            </article>
            <article className="space-y-[1rem] text-[0.9rem] ">
              {arrOfSidebarLinks.map((e, i) => {
                return (
                  <section key={i}>
                    <h1 className="text-sidebarTitles dark:text-white uppercase">
                      {e.title}
                    </h1>
                    <ul
                      role="list"
                      className="text-sidebarLinks dark:text-white"
                    >
                      {e.links.map((e1, i1) => {
                        return (
                          <li
                            role="listitem"
                            key={i1}
                            className="flex items-center  "
                          >
                            <input
                              type="radio"
                              id={e1.txt}
                              name="MySidebar"
                              className="hidden"
                              checked={
                                i == selectedLink.bar && i1 == selectedLink.link
                              }
                              onChange={() => {}}
                            />
                            <label
                              className={` ${
                                i == selectedLink.bar &&
                                i1 == selectedLink.link &&
                                `themeIndex-${themeIndex}`
                              }`}
                              htmlFor={e1.txt}
                              onClick={() => {
                                setSelectedLink({ bar: i, link: i1 });
                              }}
                            >
                              <Link
                                to={`/${e1.link!}`}
                                className=" w-full h-full"
                              >
                                <FontAwesomeIcon
                                  icon={e1.img}
                                  className="h-[1rem] w-[1rem]"
                                />
                                <span>{e1.txt}</span>
                              </Link>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                );
              })}
            </article>
          </ScrollArea>
        </aside>
      )}
    </>
  );
}
