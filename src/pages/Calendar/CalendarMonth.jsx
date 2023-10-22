import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { CalendarGrid } from './CalendarGrid/CalendarGrid';
import { getTasksForMonth } from '../../redux/calendarMonth/calendarMonth.operations';
import Toolbar from './NavBar/Toolbar';
const CalendarPage = () => {
  const { currentDate } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentMonth = new Date(currentDate);

  useEffect(() => {
    dispatch(
      getTasksForMonth({
        year: format(new Date(currentDate), 'yyyy'),
        month: +format(new Date(currentDate), 'M') - 1,
      }),
    );
  }, [currentDate, dispatch]);

  const setCurrentDate = (isoDate) => {
    navigate(`/calendar/month/${isoDate}`);
  };

  const switchToDayPeriodType = (type) => {
    if (type === PERIOD_TYPE_DAY) {
      navigate(`/calendar/day/${currentDate}`);
    }
  };

  return (
    <div>
      <Toolbar
        currentMonth={currentMonth}
        setCurrentDate={setCurrentDate}
        setPeriodType={switchToDayPeriodType}
      />
      <CalendarGrid />
    </div>
  );
};
export default CalendarPage;
