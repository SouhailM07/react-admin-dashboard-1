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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
