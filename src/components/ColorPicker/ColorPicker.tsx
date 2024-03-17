import "./colorpicker.css";
//
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
const change = (args: any) => {
  document.getElementById("preview")!.style.backgroundColor =
    args.currentValue.hex;
};

const MyCustomPicker = ({ title, type }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ColorPickerComponent
        id="inline-pallete"
        // @ts-ignore
        mode={type}
        modeSwitcher={false}
        inline
        showButtons={false}
        change={change}
      />
    </section>
  );
};

export default function ColorPicker() {
  return (
    <>
      <main className="text-center lg:px-[2rem] max-w-[90rem] mx-auto overflow-hidden w-full">
        <article id="preview" />
        <article className="flex justify-center items-center gap-20 flex-wrap">
          <MyCustomPicker title="Inline Pallet" type="Palette" />
          <MyCustomPicker title="Inline Picker" type="Picker" />
        </article>
      </main>
    </>
  );
}
