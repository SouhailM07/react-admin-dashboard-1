import "./orders.css";
// components
import { Header } from "../../components";
// syncfusion
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ordersGrid } from "@/data/dummy";

export default function Orders() {
  return (
    <>
      <main className="lg:px-[2rem] max-w-[90rem] mx-auto ">
        <Header title="pages" txt="orders" />
        <GridComponent
          dataSource={ordersData}
          allowPaging
          allowSorting
          className="border-none"
        >
          <Inject
            services={[
              Resize,
              ContextMenu,
              Sort,
              PdfExport,
              Page,
              ExcelExport,
              Edit,
              Filter,
            ]}
          />
          <ColumnsDirective>
            {ordersGrid.map((e, i) => {
              return <ColumnDirective key={i} {...e} />;
            })}
          </ColumnsDirective>
        </GridComponent>
      </main>
    </>
  );
}
