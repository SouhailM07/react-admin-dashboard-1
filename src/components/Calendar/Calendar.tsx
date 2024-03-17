import "./calendar.css";
//
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
//
import { Header } from "../../components";
//
import { scheduleData } from "../../data/dummy";

export default function Calendar() {
  return (
    <>
      <main className="lg:px-[2rem]">
        <Header title="app" txt="calendar" />
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 0, 10)}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </main>
    </>
  );
}
