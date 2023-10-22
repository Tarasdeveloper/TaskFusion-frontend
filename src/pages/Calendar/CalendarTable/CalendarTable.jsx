import { useMemo } from 'react';
import { selectTasks } from 'redux/calendar/calendar.selectors';
import { useSelector } from 'react-redux';
import useCalendar from 'hooks/useCalendar';
import { useNavigate, useParams } from 'react-router-dom';
import { formatISO } from 'date-fns';
import { useMediaQuery } from '@chakra-ui/react';
import {
  CalendarGrid,
  CalendarDate,
  GridItem,
  TodoList,
  TodoItem,
} from './CalendarTable.styled';

export default function CalendarTable() {
  const { currentDate } = useParams();
  const { daysOfMonth } = useCalendar(currentDate);
  const navigate = useNavigate();
  const tasks = useSelector(selectTasks);

  const [isLadgeThan375] = useMediaQuery('(min-width: 375px)');
  const [isLadgeThan768] = useMediaQuery('(min-width: 768px)');
  const [isLadgeThan1440] = useMediaQuery('(min-width: 1440px)');

  const titleSlicer = title => {
    if (isLadgeThan1440) {
      return title.slice(0, 11) + '...';
    } else if (isLadgeThan768) {
      return title.slice(0, 6) + '...';
    } else if (isLadgeThan375) {
      return title.slice(0, 3) + '...';
    }
  };

  const mapedTasks = useMemo(
    () =>
      tasks.reduce((acc, item) => {
        const { date } = item;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {}),
    [tasks]
  );

  return (
    <CalendarGrid>
      {daysOfMonth.map(({ date, dayOfMonth, isCurrentMonth }) => {
        const formatedDate = formatISO(date, { representation: 'date' });
        return (
          <GridItem
            key={date}
            disabled={!isCurrentMonth}
            onClick={() => navigate(`/calendar/day/${formatedDate}`)}
          >
            {isCurrentMonth && (
              <CalendarDate
                $current={
                  formatISO(date, {
                    representation: 'date',
                  }) === currentDate
                }
              >
                {dayOfMonth}
              </CalendarDate>
            )}

            {mapedTasks[formatedDate] && (
              <TodoList>
                {mapedTasks[formatedDate]?.map(task => (
                  <TodoItem key={task._id} $priority={task.priority}>
                    {titleSlicer(task.title)}
                  </TodoItem>
                ))}
              </TodoList>
            )}
          </GridItem>
        );
      })}
    </CalendarGrid>
  );
}
