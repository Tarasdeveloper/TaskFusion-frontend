// import { Wrap } from './ChoosedDay.styled';
// import { DayCalendarHead } from '../../components/DayCalendarHead/DayCalendarHead';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
// import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
// import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';

export const ChoosedDay = () => {
  return (
    <>
      <Header></Header>
      {/* <SideBar></SideBar> */}
      <TasksColumnsList />
      {/* <DayCalendarHead /> */}
    </>
    // <Wrap>
    //   <h1>Calendar</h1>
    // {<DayCalendarHead />}
    // </Wrap>
  );
};
