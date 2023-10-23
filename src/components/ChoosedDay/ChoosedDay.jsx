import { Wrap } from './ChoosedDay.styled';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
// import SideBar from '../SideBar/SideBar';
// import Header from '../Header/Header';

import // useNavigate,
// useParams,
'react-router-dom';
// import { CalendarToolbar } from '../../components/CalendarToolbar/CalendarToolbar';
// import { PERIOD_TYPE_DAY, PERIOD_TYPE_MONTH } from './constants';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
// import { CalendarToolbar } from '../CalendarToolbar/CalendarToolbar';

// const { currentDate } = useParams();
// const navigate = useNavigate();

// const setCurrentDate = (isoDate) => {
//   navigate(`/calendar/day/${isoDate}`);
// };

// const switchToMonthPeriodType = (type) => {
//   if (type === PERIOD_TYPE_MONTH) {
//     navigate(`/calendar/month/${currentDate}`);
//   }
// };

export const ChoosedDay = () => {
  // const { currentDate } = useParams();

  // const navigate = useNavigate();

  // const setCurrentDate = (isoDate) => {
  //   navigate(`/calendar/day/${isoDate}`);
  // };

  // const switchToMonthPeriodType = (type) => {
  //   if (type === PERIOD_TYPE_MONTH) {
  //     navigate(`/calendar/month/${currentDate}`);
  //   }
  // };

  // console.log(currentDate);
  return (
    <Wrap>
      {/* <Header></Header> */}
      {/* <SideBar></SideBar> */}
      {/* 
      <CalendarToolbar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={PERIOD_TYPE_DAY}
        setPeriodType={switchToMonthPeriodType}
      /> */}
      <DayCalendarHead />
      <TasksColumnsList />
    </Wrap>
    // <Wrap>
    //   <h1>Calendar</h1>
    // </Wrap>
  );
};
