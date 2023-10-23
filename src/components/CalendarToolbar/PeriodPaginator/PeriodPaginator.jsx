import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  format,
  formatISO,
  addMonths,
  subMonths,
  parseISO,
  startOfMonth,
  subDays,
  addDays,
  isThisMonth,
  isFirstDayOfMonth,
  isLastDayOfMonth,
} from 'date-fns';
import {
  addChoosedDay,
  addCurrentMonth,
  addIndexCurrentDay,
  clearTasks,
} from '../../../redux/calendar/calendar.slice.js';
import {
  selectCurrentMonth,
  selectIsLoading,
} from '../../../redux/calendar/calendar.selectors';

import Icons from '../../../assets/sprite.svg';
import * as STC from './PeriodPaginator.styled';

export const PeriodPaginator = ({ currentIndex, choosedDay }) => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const prevMonth = formatISO(new Date(subMonths(currentMonth, 1)), {
    representation: 'date',
  });
  const nextMonth = formatISO(new Date(addMonths(currentMonth, 1)), {
    representation: 'date',
  });
  const prevDay = formatISO(new Date(subDays(new Date(choosedDay), 1)), {
    representation: 'date',
  });
  const nextDay = formatISO(new Date(addDays(new Date(choosedDay), 1)), {
    representation: 'date',
  });

  const handlePrevMonth = () => {
    dispatch(clearTasks());
    dispatch(addCurrentMonth(prevMonth));
    dispatch(
      addChoosedDay(
        formatISO(
          new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
          { representation: 'date' },
        ),
      ),
    );
  };
  const handleNextMonth = () => {
    dispatch(clearTasks());
    dispatch(addCurrentMonth(nextMonth));
    dispatch(
      addChoosedDay(
        formatISO(
          new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
          { representation: 'date' },
        ),
      ),
    );
  };
  const handlePrevDay = () => {
    dispatch(addChoosedDay(prevDay));
    dispatch(addIndexCurrentDay(currentIndex - 1));
  };
  const handleNextDay = () => {
    dispatch(addChoosedDay(nextDay));
    dispatch(addIndexCurrentDay(currentIndex + 1));
  };

  return (
    <STC.Wrapper>
      <STC.MonthWrapper>
        {currentIndex !== null ? (
          <STC.MonthName>
            {format(new Date(choosedDay), 'd MMMM yyyy')}
          </STC.MonthName>
        ) : (
          <STC.MonthName>{format(currentMonth, 'MMMM yyyy')}</STC.MonthName>
        )}
      </STC.MonthWrapper>

      <STC.WrapperButton>
        {currentIndex !== null ? (
          isFirstDayOfMonth(new Date(choosedDay)) ? (
            <STC.ButtonLeft disabled>
              <STC.Icon width="20" height="20">
                <use href={`${Icons}#calendar-right-sf`}></use>
              </STC.Icon>
            </STC.ButtonLeft>
          ) : (
            <STC.ButtonLeft to={`day/${prevDay}`} onClick={handlePrevDay}>
              <STC.Icon width="20" height="20">
                <use href={`${Icons}#calendar-right-sf`}></use>
              </STC.Icon>
            </STC.ButtonLeft>
          )
        ) : isThisMonth(new Date(currentMonth)) ? (
          <STC.ButtonLeft disabled>
            <STC.Icon width="20" height="20">
              <use href={`${Icons}#calendar-right-sf`}></use>
            </STC.Icon>
          </STC.ButtonLeft>
        ) : (
          <STC.ButtonLeft
            to={`month/${formatISO(
              new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
              { representation: 'date' },
            )}`}
            onClick={() => {
              if (isLoading) {
                return;
              }
              handlePrevMonth();
            }}
            disabled={isLoading}
          >
            <STC.Icon width="20" height="20">
              <use href={`${Icons}#calendar-right-sf`}></use>
            </STC.Icon>
          </STC.ButtonLeft>
        )}

        {currentIndex !== null ? (
          isLastDayOfMonth(new Date(choosedDay)) ? (
            <STC.ButtonRight disabled>
              <STC.Icon>
                <use href={`${Icons}#calendar-left-sf`}></use>
              </STC.Icon>
            </STC.ButtonRight>
          ) : (
            <STC.ButtonRight to={`day/${nextDay}`} onClick={handleNextDay}>
              <STC.Icon>
                <use href={`${Icons}#calendar-left-sf`}></use>
              </STC.Icon>
            </STC.ButtonRight>
          )
        ) : (
          <STC.ButtonRight
            to={`month/${formatISO(
              new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
              { representation: 'date' },
            )}`}
            onClick={() => {
              if (isLoading) {
                return;
              }
              handleNextMonth();
            }}
            disabled={isLoading}
          >
            <STC.Icon>
              <use href={`${Icons}#calendar-left-sf`}></use>
            </STC.Icon>
          </STC.ButtonRight>
        )}
      </STC.WrapperButton>
    </STC.Wrapper>
  );
};
PeriodPaginator.propTypes = {
  currentIndex: PropTypes.number || null.isRequired,
  choosedDay: PropTypes.string,
};
