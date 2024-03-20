import "./employees.css";
// components
import { Header } from "../../components";
// syncfusion
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "@/data/dummy";

export default function Employees() {
  return (
    <>
      <main className="lg:px-[2rem] max-w-[90rem] mx-auto ">
        <Header title="pages" txt="Employees" />
        <GridComponent
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          width="auto"
          className="border-none"
        >
          <Inject services={[Page, Edit, Search, Toolbar]} />
          <ColumnsDirective>
            {employeesGrid.map((e, i) => {
              return <ColumnDirective key={i} {...e} />;
            })}
          </ColumnsDirective>
        </GridComponent>
      </main>
    </>
  );
}
