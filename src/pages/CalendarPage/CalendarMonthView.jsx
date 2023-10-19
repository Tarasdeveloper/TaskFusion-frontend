import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { CalendarTable } from './CalendarTable';
import { CalendarToolbar } from './CalendarToolbar/CalendarToolbar';
import { MonthCalendarHead } from './MonthCalendarHead';
import { PERIOD_TYPE_DAY, PERIOD_TYPE_MONTH } from './constants';
import { getTasksOfMonth } from 'redux/calendar/calendar.operations';

export default function CalendarMonth() {
  const { currentDate } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getTasksOfMonth({
   
        month: +format(new Date(currentDate), 'M') - 1,
        year: format(new Date(currentDate), 'yyyy'),
      })
    );
  }, [currentDate, dispatch]);

  const setCurrentDate = isoDate => {
    navigate(`/calendar/month/${isoDate}`);
  };
  const switchToDayPeriodType = type => {
    if (type === PERIOD_TYPE_DAY) {
      navigate(`/calendar/day/${currentDate}`);
    }
  };

  return (
    <>
      <CalendarToolbar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={PERIOD_TYPE_MONTH}
        setPeriodType={switchToDayPeriodType}
      />
      <MonthCalendarHead />
      <CalendarTable />
    </>
  );
}
