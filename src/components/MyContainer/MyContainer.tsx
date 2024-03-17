import "./mycontainer.css";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// import { useTheme } from "../ThemeProvider/ThemeProvider";
// components
import {
  Editor,
  ColorPicker,
  MySidebar,
  SettingsPanel,
  Ecommerce,
  Navbar,
  LineChart,
  Calendar,
  Area,
  Orders,
  Employees,
  Customers,
  Kanban,
} from "../../components";
export default function MyContainer() {
  // const { setTheme } = useTheme();
  return (
    <BrowserRouter>
      <div className="flex">
        <SettingsPanel />
        <MySidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="editor" element={<Editor />} />
            <Route path="colorPicker" element={<ColorPicker />} />
            <Route path="line" element={<LineChart />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="area" element={<Area />} />
            <Route path="orders" element={<Orders />} />
            <Route path="employees" element={<Employees />} />
            <Route path="customers" element={<Customers />} />
            <Route path="Kanban" element={<Kanban />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
