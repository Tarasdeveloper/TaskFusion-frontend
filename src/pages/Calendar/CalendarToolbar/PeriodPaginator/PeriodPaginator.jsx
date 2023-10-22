import PropTypes from 'prop-types';
import {
  addDays,
  addMonths,
  format,
  formatISO,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';

import Icons from '../../../../images/sprite.svg';
import {
  Wrapper,
  PeriodWrapper,
  WrapperButton,
  NavButton,
  Icon,
} from './PeriodPaginator.styled';
import {
  PERIOD_TYPE_DAY,
  PERIOD_TYPE_MONTH,
} from 'pages/CalendarPage/constants';

export const PeriodPaginator = ({
  periodType,
  currentDate,
  setCurrentDate,
}) => {
  const handlePrev = () => {
    let newDate;
    if (periodType === PERIOD_TYPE_MONTH) {
      newDate = subMonths(startOfMonth(new Date(currentDate)), 1);
    } else {
      newDate = subDays(new Date(currentDate), 1);
    }
    setCurrentDate(formatISO(newDate, { representation: 'date' }));
  };
  const handleNext = () => {
    let newDate;
    if (periodType === PERIOD_TYPE_MONTH) {
      newDate = addMonths(startOfMonth(new Date(currentDate)), 1);
    } else {
      newDate = addDays(new Date(currentDate), 1);
    }
    setCurrentDate(formatISO(newDate, { representation: 'date' }));
  };

  return (
    <Wrapper>
      <PeriodWrapper>
        {periodType === PERIOD_TYPE_MONTH
          ? format(new Date(currentDate), 'MMMM yyyy')
          : format(new Date(currentDate), 'd MMMM yyyy')}
      </PeriodWrapper>

      <WrapperButton>
        <NavButton onClick={handlePrev}>
          <Icon width="20" height="20">
            <use href={`${Icons}#calendar-right-sf`}></use>
          </Icon>
        </NavButton>
        <NavButton onClick={handleNext}>
          <Icon width="20" height="20">
            <use href={`${Icons}#calendar-left-sf`}></use>
          </Icon>
        </NavButton>
      </WrapperButton>
    </Wrapper>
  );
};
PeriodPaginator.propTypes = {
  periodType: PropTypes.oneOf([PERIOD_TYPE_MONTH, PERIOD_TYPE_DAY]).isRequired,
  currentDate: PropTypes.string.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};
