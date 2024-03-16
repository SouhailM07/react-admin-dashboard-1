"use client";
import "./colorpicker.css";
//
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
const change = (args: any) => {
  document.getElementById("preview")!.style.backgroundColor =
    args.currentValue.hex;
};
export default function ColorPicker() {
  return (
    <>
      <main className="text-center">
        <article id="preview" />
        <article className="flex justify-center items-center gap-20 flex-wrap">
          <section>
            <h1>Inline Pallet</h1>
            <ColorPickerComponent
              id="inline-pallete"
              // @ts-ignore
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </section>
          <section>
            <h1>Inline Picker</h1>
            <ColorPickerComponent
              id="inline-pallete"
              // @ts-ignore
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </section>
        </article>
      </main>
    </>
  );
}
