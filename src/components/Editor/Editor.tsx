"use client";
import "./editor.css";
// syncfusion
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
// components
import { Header } from "@/components";
export default function Editor() {
  return (
    <>
      <main className="lg:px-[2rem] max-w-[90rem] mx-auto ">
        <Header title="app" txt="Editor" />
        <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </main>
    </>
  );
}
