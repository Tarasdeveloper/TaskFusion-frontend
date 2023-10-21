import { FullCallendar } from './CalendarPage.styled';
import { formatISO } from 'date-fns';
import { Route, Routes, Navigate } from 'react-router-dom';
import CalendarMonth from './CalendarMonth';
/* import CalendarDayView from './CalendarDayView'; */

export default function CalendarPage() {
  const currentDate = formatISO(new Date(), {
    representation: 'date',
  });

  return (
    <FullCallendar>
      <Routes>
        <Route index element={<Navigate to={`month/${currentDate}`} />} />
        <Route path="month/:currentDate" Component={CalendarMonth} />
      </Routes>
    </FullCallendar>
  );
}
