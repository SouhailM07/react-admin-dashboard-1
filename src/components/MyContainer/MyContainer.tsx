import "./mycontainer.css";
// router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// components
import { Editor, ColorPicker } from "../../components";
export default function MyContainer() {
  return (
    <div className="w-full">
      hello
      <BrowserRouter>
        <Routes>
          <Route path="editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
