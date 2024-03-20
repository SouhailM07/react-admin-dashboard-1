import "./header.css";
export default function Header({ title, txt }: { title: string; txt: string }) {
  return (
    <>
      <div className="space-y-[0.3rem] text-start font-medium my-[1rem] capitalize">
        <h1 className="text-[0.9rem]">{title}</h1>
        <h2 className="text-[1.5rem]">{txt}</h2>
      </div>
    </>
  );
}
