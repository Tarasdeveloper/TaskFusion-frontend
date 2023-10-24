import { useEffect, useState } from 'react';
import { selectTasks } from '../../../redux/calendarMonth/calendarMonth.selectors';
import { useSelector } from 'react-redux';
import useCalendar from '../../../hooks/useCalendar';
import { useNavigate, useParams } from 'react-router-dom';
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  formatISO,
  startOfWeek,
} from 'date-fns';
import {
  GridWrap,
  CellWrap,
  CalendarDate,
  GridWrapOfDays,
  CellWrapOfDays,
  WeekDay,
  TaskContainer,
  TaskTitle,
} from './CalendarGrid.styled';

export const CalendarGrid = () => {
  const { currentDate } = useParams();
  const { daysOfMonth } = useCalendar(currentDate);
  const tasks = useSelector(selectTasks);
  const navigate = useNavigate();
  const [formatOfWeek, setFormatOfWeek] = useState('EEEEE');
  const [maxLength, setMaxLength] = useState(8);
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
      if (window.innerWidth <= 375) {
        setMaxLength(3);
      } else if (window.innerWidth <= 768) {
        setMaxLength(5);
      } else if (window.innerWidth <= 1440) {
        setMaxLength(12);
      } else {
        setMaxLength(16);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shortenTittle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFormatOfWeek('EEE');
      } else {
        setFormatOfWeek('EEEEE');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isCurrentDate = (date) => {
    return (
      formatISO(date, { representation: 'date' }) ===
      formatISO(new Date(), { representation: 'date' })
    );
  };

  const listOfTasks = tasks.reduce((acc, task) => {
    const { date } = task;
    acc[date] = acc[date] || [];
    acc[date].push(task);
    return acc;
  }, {});

  return (
    <>
      <GridWrapOfDays>
        {daysOfWeek.map((day) => (
          <CellWrapOfDays key={day.toString()}>
            <WeekDay>{format(day, formatOfWeek)}</WeekDay>
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
              {isCurrentMonth && (
                <CalendarDate $current={isCurrentDate(date)}>
                  {dayOfMonth}
                </CalendarDate>
              )}
              {listOfTasks[formatedDate] && (
                <TaskContainer>
                  {listOfTasks[formatedDate]?.map((task) => (
                    <TaskTitle $priority={task.priority} key={task._id}>
                      {shortenTittle(task.title, maxLength)}
                    </TaskTitle>
                  ))}
                </TaskContainer>
              )}
            </CellWrap>
          );
        })}
      </GridWrap>
    </>
  );
};
