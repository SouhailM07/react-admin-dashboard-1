import "./area.css";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
//
import { Header } from "../../components";
//
import {
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  areaCustomSeries,
} from "../../data/dummy";

export default function Area() {
  return (
    <>
      <main className="max-w-[90rem] mx-auto lg:px-[2rem]">
        <Header title="Area" txt="Inflation Rate in percentage" />
        <ChartComponent
          id="charts"
          //@ts-ignore
          primaryXAxis={areaPrimaryXAxis}
          //@ts-ignore
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </main>
    </>
  );
}
