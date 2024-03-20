import "./mysparkline.css";
// syncfusion
import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from "@syncfusion/ej2-react-charts";

export default function MySparkLine({
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) {
  return (
    <>
      <SparklineComponent
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </>
  );
}
