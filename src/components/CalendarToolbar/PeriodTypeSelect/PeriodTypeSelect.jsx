import { useDispatch, useSelector } from 'react-redux';
import { format, formatISO, isThisMonth } from 'date-fns';
import {
  addChoosedDay,
  addIndexCurrentDay,
} from 'redux/calendar/calendar.slice';
import {
  selectChoosedDay,
  selectCurrentMonth,
  selectIndexCurrentDay,
} from 'redux/calendar/calendar.selectors';

import * as STC from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = () => {
  const dispath = useDispatch();
  const currentDate = useSelector(selectCurrentMonth);
  const choosedDay = useSelector(selectChoosedDay);
  const currentIndex = useSelector(selectIndexCurrentDay);

  const LinkMonth =
    currentIndex !== null ? STC.StyledLinkMonth : STC.LinkActiveMonth;
  const LinkDay = currentIndex !== null ? STC.LinkActiveDay : STC.StyledLinkDay;

  return (
    <STC.Wrapper>
      {isThisMonth(new Date(currentDate)) ? (
        <LinkMonth
          to={`month/${formatISO(new Date(currentDate), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(addIndexCurrentDay(null));
          }}
        >
          Month
        </LinkMonth>
      ) : (
        <LinkMonth
          to={`month/${formatISO(new Date(choosedDay), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(addIndexCurrentDay(null));
          }}
        >
          Month
        </LinkMonth>
      )}

      {isThisMonth(new Date(currentDate)) ? (
        <LinkDay
          to={`day/${formatISO(new Date(currentDate), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(
              addChoosedDay(
                formatISO(new Date(currentDate), { representation: 'date' })
              )
            );
            dispath(
              addIndexCurrentDay(Number(format(new Date(currentDate), 'd')) - 1)
            );
          }}
        >
          Day
        </LinkDay>
      ) : (
        <LinkDay
          to={`day/${formatISO(new Date(choosedDay), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(
              addChoosedDay(
                formatISO(new Date(choosedDay), { representation: 'date' })
              )
            );
            dispath(
              addIndexCurrentDay(Number(format(new Date(choosedDay), 'd')) - 1)
            );
          }}
        >
          Day
        </LinkDay>
      )}
    </STC.Wrapper>
  );
};