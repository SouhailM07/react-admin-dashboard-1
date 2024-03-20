import "./ecommerce.css";
// ? types
import { myBox } from "@/types";
// components
import { MySparkLine, MyStacked } from "@/components";
// ! arrays
import { arrOfBoxes } from "@/arrays";
import { SparklineAreaData } from "@/data/dummy";
// zustand
import themeStore from "@/zustand/themeStore";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*=============================================================================================*/
// main component section
/*=============================================================================================*/

export default function Ecommerce() {
  const { themeIndex } = themeStore((state) => state);
  return (
    <>
      <main className="max-sm:px-[0.5rem] px-[2rem] py-[4rem] w-full dark:text-black">
        <article className="flex max-md:flex-wrap max-md:justify-center max-md:gap-[2rem] space-x-[1rem] w-full">
          <Earnings />
          <section className="flex justify-around max-w-[65rem]  flex-wrap gap-[1rem]">
            {arrOfBoxes.map((e, i) => {
              return (
                <MyBox
                  key={i}
                  Color={e.Color}
                  label={e.label}
                  img={e.img}
                  n={e.n}
                  Bg={e.Bg}
                  percent={e.percent}
                />
              );
            })}
          </section>
        </article>
        <article className="mt-[5rem] space-y-[4rem]">
          <section className="flex justify-between gap-[1rem] flex-wrap">
            <h1 className="text-[1.4rem] max-md:text-[0.9rem] dark:text-white font-bold">
              Revenue Updates
            </h1>
            <div className="flex space-x-[2rem] max-md:text-[0.7rem]">
              <div className="flex items-center space-x-[1rem] dark:text-white">
                <div className="h-2 w-2 rounded-full dark:bg-white  bg-black"></div>
                <p>Express</p>
              </div>
              <div className="flex items-center  space-x-[1rem] text-green-400">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <p>Budget</p>
              </div>
            </div>
          </section>
          <div className="flex justify-start max-lg:gap-[5rem] max-lg:flex-col max-lg:items-center items-start flex-wrap gap-[10rem] ">
            <section className="bg-white drop-shadow-lg p-3 rounded-md space-y-[1rem]">
              <div>
                <p className="text-[1.3rem] font-bold">$93,438</p>
                <span className="text-gray-500 text-[0.8rem] font-medium">
                  Budget
                </span>
                <span className="translate-x-[3rem]  translate-y-[-1rem] p-1 text-[0.6rem] inline-block bg-green-400 text-white rounded-full">
                  23%
                </span>
              </div>
              <div>
                <p className="text-[1.3rem] font-bold">$48,487</p>
                <span className="text-gray-500 text-[0.8rem] font-medium">
                  Expense
                </span>
              </div>
              <MySparkLine
                currentColor={"cyan"}
                id="line-sparkLine"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={"cyan"}
              />
              <button
                className={`themeIndex-${themeIndex} cursor-pointer hover:drop-shadow-xl text-white w-[10rem] rounded-md h-[3rem]  mt-[2rem]`}
              >
                Download Report
              </button>
            </section>
            <section>
              <MyStacked width="320px" height="360px" />
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

const Earnings = () => {
  const { themeIndex } = themeStore((state) => state);
  return (
    <section className="min-w-[16rem] rounded-xl drop-shadow-xl bg-white grid grid-cols-2 grid-rows-[1.5rem_1.5rem_1fr] px-[1.5rem] py-[1rem] h-[10rem]  ">
      <h1 className="text-sidebarTitles text-[0.8rem] mt-[0.4rem] font-bold">
        Earnings
      </h1>
      <div
        className={`h-[2.5rem] w-[2.5rem] cursor-pointer hover:drop-shadow-xl rounded-full themeIndex-${themeIndex} text-white grid place-items-center font-medium place-self-end col-[2/2] row-[1/3]`}
      >
        $
      </div>
      <p className="text-[1.2rem]">$63,448.78</p>
      <button
        className={`themeIndex-${themeIndex} cursor-pointer hover:drop-shadow-xl text-white w-[6rem] rounded-md h-[3rem] row-[3/3] mt-[2rem]`}
      >
        Download
      </button>
    </section>
  );
};

//
const MyBox = ({ Bg, img, n, label, percent, Color }: myBox) => {
  return (
    <div className="bg-white drop-shadow-xl w-[14rem] p-[1rem] pt-[2rem] rounded-md h-[10rem]">
      <div
        className={`h-[3rem] w-[3rem] grid place-items-center rounded-full ${Bg} ${Color} cursor-pointer hover:drop-shadow-xl`}
      >
        <FontAwesomeIcon icon={img} className=" h-[1.5rem] w-[1.5rem]" />
      </div>
      <p className="font-bold flex items-center my-[0.6rem]">
        {n}
        <span
          className={`font-medium ml-[0.5rem] text-[0.9rem] ${
            percent.includes("-") ? "text-red-500" : "text-green-500"
          }`}
        >
          {" "}
          {percent}
        </span>
      </p>
      <p className="text-sidebarTitles text-[0.9rem]">{label}</p>
    </div>
  );
};
