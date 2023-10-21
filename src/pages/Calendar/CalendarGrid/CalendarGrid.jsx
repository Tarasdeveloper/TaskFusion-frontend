import { useEffect, useMemo, useState } from 'react';
import { selectTasks } from '../../../redux/calendarMonth/calendarMonth.selectors';
import { useSelector } from 'react-redux';
import useCalendar from '../../../hooks/useCalendar';
import { useNavigate, useParams } from 'react-router-dom';
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  formatISO,
  isToday,
  startOfWeek,
} from 'date-fns';
import {
  GridWrap,
  CellWrap,
  CalendarDate,
  GridWrapOfDays,
  CellWrapOfDays,
  CurrentDay,
} from './CalendarGrid.styled';

export const CalendarGrid = () => {
  const { currentDate } = useParams();
  const { daysOfMonth } = useCalendar(currentDate);
  const [formatOfWeek, setFormatOfWeek] = useState('EEEEE');
  const monday = startOfWeek(new Date(), { weekStartsOn: 1 });
  const sunday = endOfWeek(new Date(), {
    weekStartsOn: 1,
    weekEndsOn: 0,
  });
  const daysOfWeek = eachDayOfInterval({
    start: monday,
    end: sunday,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFormatOfWeek('EEE');
      } else {
        setFormatOfWeek('EEEEE');
      }
    };

    handleResize(); // Вызываем при загрузке компонента

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isCurrentDay = (date) => {
    return isToday(date);
  };

  return (
    <>
      <GridWrapOfDays>
        {daysOfWeek.map((day) => (
          <CellWrapOfDays key={day.toString()}>
            <span>{format(day, formatOfWeek)}</span>
          </CellWrapOfDays>
        ))}
      </GridWrapOfDays>
      <GridWrap>
        {daysOfMonth.map(({ date, dayOfMonth, isCurrentMonth }) => {
          const formatedDate = formatISO(date, { representation: 'date' });
          return (
            <CellWrap
              key={date}
              disabled={!isCurrentMonth}
              onClick={() => navigate(`/calendar/day/${formatedDate}`)}
            >
              {isCurrentDay(date) ? (
                <>
                  {isCurrentMonth && (
                    <CalendarDate>
                      <CurrentDay>{dayOfMonth}</CurrentDay>
                    </CalendarDate>
                  )}
                </>
              ) : (
                <CalendarDate>{dayOfMonth}</CalendarDate>
              )}
            </CellWrap>
          );
        })}
      </GridWrap>
    </>
  );
};
