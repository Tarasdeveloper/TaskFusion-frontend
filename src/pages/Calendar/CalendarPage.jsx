import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentDate } from '../../redux/calendarMonth/calendarMonth.selectors.js';
import { addCurrentMonth } from '../../redux/calendarMonth/calendarMonth.slice';
import * as dateFns from 'date-fns';
import { useEffect, useState } from 'react';
import CalendarMonth from '../../components/CalendarMonth/CalendarMonth.jsx';
import Toolbar from '../../components/CalendarMonth/Toolbar/Toolbar.jsx';
import { FullCallendar } from './CalendarPage.styled.js';
import { getTasksForMonth } from '../../redux/calendarMonth/calendarMonth.operations.js';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const currentDateOfMonth = useSelector(selectCurrentDate);
  const currentDate = new Date(currentDateOfMonth);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const firstDay = dateFns.startOfMonth(currentDate);
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(new Date(firstDay), {
    weekStartsOn: 1,
  });

  const endDate = dateFns.endOfWeek(lastDay);
  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const monday = dateFns.startOfWeek(new Date(), { weekStartsOn: 1 });
  const sunday = dateFns.endOfWeek(new Date(), {
    weekStartsOn: 1,
    weekEndsOn: 0,
  });

  const daysOfWeek = dateFns.eachDayOfInterval({
    start: monday,
    end: sunday,
  });
  const prevHandler = () => {
    dispatch(addCurrentMonth(dateFns.subMonths(currentDate, 1).toISOString()));
  };

  const nextHandler = () => {
    dispatch(addCurrentMonth(dateFns.addMonths(currentDate, 1).toISOString()));
  };

  //запрос
  dispatch(
    getTasksForMonth({
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    }),
  )
    .then((response) => {
      console.log('Tasks for the month:', response.payload);
    })
    .catch((error) => {
      console.error('Error fetching tasks:', error);
    });

  return (
    <FullCallendar>
      <Toolbar
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        selectedDate={selectedDate}
        currentDate={currentDate}
      />
      <CalendarMonth
        startDate={startDate}
        daysOfWeek={daysOfWeek}
        totalDate={totalDate}
        firstDay={firstDay}
        lastDay={lastDay}
      />
    </FullCallendar>
  );
};
export default CalendarPage;
