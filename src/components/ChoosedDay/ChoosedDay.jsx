import { Wrap } from './ChoosedDay.styled';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
// import SideBar from '../SideBar/SideBar';
// import Header from '../Header/Header';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
// import { CalendarToolbar } from '../CalendarToolbar/CalendarToolbar';

export const ChoosedDay = () => {
  return (
    <Wrap>
      {/* <Header></Header> */}
      {/* <SideBar></SideBar> */}
      {/* <CalendarToolbar /> */}
      <DayCalendarHead />
      <TasksColumnsList />
    </Wrap>
    // <Wrap>
    //   <h1>Calendar</h1>
    // {<DayCalendarHead />}
    // </Wrap>
  );
};
