import "./customers.css";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
//
import { customersData, customersGrid } from "@/data/dummy";
//
import { Header } from "../../components";
export default function Customers() {
  return (
    <>
      <main className="lg:px-[2rem] max-w-[90rem] mx-auto">
        <Header title="page" txt="customers" />
        <GridComponent
          dataSource={customersData}
          allowPaging
          allowSorting
          toolbar={["Delete"]}
          editSettings={{ allowDeleting: true, allowEditing: true }}
          width="auto"
          className="border-none"
        >
          <Inject services={[Page, Edit, Toolbar, Selection, Sort, Filter]} />
          <ColumnsDirective>
            {customersGrid.map((e, i) => {
              return <ColumnDirective key={i} {...e} />;
            })}
          </ColumnsDirective>
        </GridComponent>
      </main>
    </>
  );
}
