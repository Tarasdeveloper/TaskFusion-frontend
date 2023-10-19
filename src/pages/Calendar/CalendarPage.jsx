import * as dateFns from 'date-fns';
import { useState } from 'react';
import CalendarMonth from '../../components/CalendarMonth/CalendarMonth.jsx';
import Toolbar from '../../components/CalendarMonth/Toolbar/Toolbar.jsx';
import { FullCallendar } from './CalendarPage.styled.js';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
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
    setCurrentDate((prevDate) => dateFns.subMonths(prevDate, 1));
  };
  const nextHandler = () => {
    setCurrentDate((prevDate) => dateFns.addMonths(prevDate, 1));
  };

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
      />
    </FullCallendar>
  );
};
export default CalendarPage;
