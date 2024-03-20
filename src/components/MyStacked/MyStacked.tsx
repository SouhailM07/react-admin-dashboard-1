import "./mystacked.css";
// syncfusion
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
// data
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "@/data/dummy";
export default function MyStacked({ width, height }) {
  return (
    <>
      <ChartComponent
        // @ts-ignore
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        width={width}
        height={height}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((e, i) => (
            <SeriesDirective key={i} {...e} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
}
