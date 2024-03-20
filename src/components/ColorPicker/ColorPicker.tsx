import "./colorpicker.css";
//
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
// components
import { Header } from "@/components";

//
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
      <main className=" lg:px-[2rem] text-center max-w-[90rem] mx-auto  w-full">
        <Header title="app" txt="Color Picker" />
        <article id="preview" />
        <article className="flex justify-center  gap-20 w-auto flex-wrap ">
          <MyCustomPicker title="Inline Pallet" type="Palette" />
          <MyCustomPicker title="Inline Picker" type="Picker" />
        </article>
      </main>
    </>
  );
}
