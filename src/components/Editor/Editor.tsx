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

export default function Editor() {
  return (
    <>
      <main className="lg:px-[2rem]">
        <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </main>
    </>
  );
}
