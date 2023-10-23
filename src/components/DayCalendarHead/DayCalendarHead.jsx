import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  eachDayOfInterval,
  endOfISOWeek,
  format,
  formatISO,
  isSameDay,
  startOfISOWeek,
} from 'date-fns';
import {
  addChoosedDay,
  addIndexCurrentDay,
} from '../../redux/calendar/calendar.slice';

import { OtherDay, ActiveDay, Day, Item, List } from './DayCalendarHead.styled';

const DayCalendarHead = () => {
  const { currentDate: day } = useParams() ?? '2023-10-22';
  const currentDay = day;
  console.log(day);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function formattedDay(day) {
    return day.startsWith('0') ? day.slice(1) : day;
  }

  const handleClick = (day) => {
    dispatch(addIndexCurrentDay(Number(format(day, 'd')) - 1));
    dispatch(
      addChoosedDay(
        formatISO(new Date(day), {
          representation: 'date',
        }),
      ),
    );
    navigate(`/calendar/day/${format(day, 'yyyy-MM-dd')}`);
  };
  let daysInWeek;

  if (currentDay) {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
    });
  } else {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(), { weekStartsOn: 1 }),
    });
  }

  return (
    <>
      <List>
        {daysInWeek?.map((day, idx) => {
          const currentDate = new Date(currentDay);
          const otherDate = new Date(day);
          const DateWeek = isSameDay(currentDate, otherDate)
            ? OtherDay
            : ActiveDay;
          return (
            <Item key={idx}>
              <Day>{format(day, 'EEE').toUpperCase()}</Day>
              <DateWeek type="button" onClick={() => handleClick(day)}>
                {formattedDay(format(day, 'dd'))}
              </DateWeek>
            </Item>
          );
        })}
      </List>
    </>
  );
};
export default DayCalendarHead;
