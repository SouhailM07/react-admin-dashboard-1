import { sidebarLinks, myBox } from "@/types";
// assets
import {
  faBagShopping,
  faCartShopping,
  faUserGroup,
  faUsers,
  faCalendar,
  faBorderAll,
  faPenToSquare,
  faEyeDropper,
  faChartLine,
  faChartColumn,
  faChartPie,
  faCoins,
  faSignal,
  faCaretUp,
  faBox,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

export const arrOfSidebarLinks: sidebarLinks[] = [
  {
    title: "dashboard",
    links: [{ img: faBagShopping, txt: "Ecommerce", link: "" }],
  },
  {
    title: "pages",
    links: [
      { img: faCartShopping, txt: "Orders", link: "orders" },
      { img: faUserGroup, txt: "Employees", link: "employees" },
      { img: faUsers, txt: "Customers", link: "customers" },
    ],
  },
  {
    title: "apps",
    links: [
      { img: faCalendar, txt: "Calendar", link: "calendar" },
      { img: faBorderAll, txt: "Kanban", link: " " },
      { img: faPenToSquare, txt: "Editor", link: "editor" },
      { img: faEyeDropper, txt: "Color-Picker", link: "colorPicker" },
    ],
  },
  {
    title: "charts",
    links: [
      { img: faChartLine, txt: "Line", link: "line" },
      { img: faChartColumn, txt: "Area", link: "area" },
      { img: faChartColumn, txt: "Bar", link: " " },
      { img: faChartPie, txt: "Pie", link: " " },
      { img: faCoins, txt: "Financial", link: " " },
      { img: faSignal, txt: "Color-Mapping", link: " " },
      { img: faCaretUp, txt: "Pyramid", link: " " },
    ],
  },
];

export const arrOfBoxes: myBox[] = [
  {
    img: faUserGroup,
    Bg: "bg-[#c5fafd]",
    Color: "text-[#02c8d6]",
    n: "39,354",
    label: "Customers",
    percent: "-4%",
  },
  {
    img: faBox,
    Bg: "bg-[#ffcb0f]",
    Color: "text-[#ffffff]",
    n: "4,396",
    label: "Products",
    percent: "+23%",
  },
  {
    img: faSignal,
    Bg: "bg-[#fff4e6]",
    Color: "text-[#e36875]",
    n: "423,39",
    label: "Sales",
    percent: "+38%",
  },
  {
    img: faRotate,
    Bg: "bg-[#ebfaf2]",
    Color: "text-[#00c291]",
    n: "39,354",
    label: "Refunds",
    percent: "-12%",
  },
];
