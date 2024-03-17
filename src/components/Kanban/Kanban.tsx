import "./kanban.css";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
//
import { kanbanData, kanbanGrid } from "@/data/dummy";
//
import { Header } from "../../components";

export default function Kanban() {
  return (
    <>
      <main>
        <Header title="apps" txt="kanban" />
        <KanbanComponent
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
          keyField="Status"
        >
          <ColumnsDirective>
            {kanbanGrid.map((e, i) => {
              return <ColumnDirective key={i} {...e} />;
            })}
          </ColumnsDirective>
        </KanbanComponent>
      </main>
    </>
  );
}
