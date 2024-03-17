import "./linechart.css";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
//
import { Header } from "../../components";
//
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

export default function LineChart() {
  return (
    <>
      <main className="max-w-[90rem] mx-auto lg:px-[2rem]">
        <Header title="chart" txt="Inflation Rate" />
        <ChartComponent
          id="LineChart"
          height="420px"
          // @ts-ignore
          primaryXAxis={LinePrimaryXAxis}
          // @ts-ignore
          primaryYAxis={LinePrimaryYAxis}
          tooltip={{ enable: true }}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((e, i) => {
              return <SeriesDirective key={i} {...e} />;
            })}
          </SeriesCollectionDirective>
        </ChartComponent>
      </main>
    </>
  );
}
