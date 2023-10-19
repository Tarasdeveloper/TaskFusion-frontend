import { Container } from './CalendarPage.styled';
import { formatISO } from 'date-fns';
import { Route, Routes, Navigate } from 'react-router-dom';
import CalendarMonthView from './CalendarMonthView';
import CalendarDayView from './CalendarDayView';

export default function CalendarPage() {
  const currentDate = formatISO(new Date(), {
    representation: 'date',
  });

  return (
    <Container>
      <Routes>
        <Route index element={<Navigate to={`month/${currentDate}`} />} />
        <Route path="month/:currentDate" Component={CalendarMonthView} />
        <Route path="day/:currentDate" Component={CalendarDayView} />
      </Routes>
    </Container>
  );
}
