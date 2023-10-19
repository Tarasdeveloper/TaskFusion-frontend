import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';
import {
  startOfISOWeek,
  format,
  eachDayOfInterval,
  endOfISOWeek,
  isSameDay,
  formatISO,
  isSameMonth,
} from 'date-fns';
import {
  addChoosedDay,
  addIndexCurrentDay,
} from 'redux/calendar/calendar.slice';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';

import * as STC from './CalendarHead.styled';

export const CalendarHead = ({ currentDay }) => {
  const currentMonth = useSelector(selectCurrentMonth);
  const dispath = useDispatch();
  const isWide = useMedia('(min-width: 768px)');

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
  const List = currentDay ? STC.ListDays : STC.ListMonth;
  return (
    <>
      <List>
        {daysInWeek?.map((day, idx) => {
          const Week = currentDay ? STC.Days : STC.Month;
          const StyledLink = !isSameMonth(new Date(day), new Date(currentMonth))
            ? STC.OtherMonthStyledLink
            : STC.CurrentMonthStyledLink;

          const DateOfWeek = isSameMonth(new Date(day), new Date(currentMonth))
            ? STC.DateOfWeekCurrentMonth
            : STC.DateOfWeekOtherMonth;

          const DateWeek = isSameDay(new Date(currentDay), new Date(day))
            ? STC.ChoosedDate
            : DateOfWeek;

          return (
            <Week key={idx}>
              {isWide ? (
                <STC.DayWeek>{format(day, 'EEE')}</STC.DayWeek>
              ) : (
                <STC.DayWeek>{format(day, 'EEEEE')}</STC.DayWeek>
              )}

              {currentDay && (
                <StyledLink
                  to={`/calendar/day/${formatISO(new Date(day), {
                    representation: 'date',
                  })}`}
                  onClick={() => {
                    dispath(addIndexCurrentDay(Number(format(day, 'd')) - 1));
                    dispath(
                      addChoosedDay(
                        formatISO(new Date(day), {
                          representation: 'date',
                        })
                      )
                    );
                  }}
                >
                  <DateWeek>{format(day, 'd')}</DateWeek>
                </StyledLink>
              )}
            </Week>
          );
        })}
      </List>
    </>
  );
};
CalendarHead.propTypes = {
  currentDay: PropTypes.string,
};