import PropTypes from 'prop-types';
import { Wrapper, TypeSelectBtn } from './PeriodTypeSelect.styled';
import {
  PERIOD_TYPE_DAY,
  PERIOD_TYPE_MONTH,
} from 'pages/CalendarPage/constants';

export const PeriodTypeSelect = ({ periodType, setPeriodType }) => {
  return (
    <Wrapper>
      <TypeSelectBtn
        onClick={() => setPeriodType(PERIOD_TYPE_MONTH)}
        $isActive={periodType === PERIOD_TYPE_MONTH}
      >
        Month
      </TypeSelectBtn>
      <TypeSelectBtn
        onClick={() => setPeriodType(PERIOD_TYPE_DAY)}
        $isActive={periodType === PERIOD_TYPE_DAY}
      >
        Day
      </TypeSelectBtn>
    </Wrapper>
  );
};

PeriodTypeSelect.propTypes = {
  periodType: PropTypes.string.isRequired,
  setPeriodType: PropTypes.func.isRequired,
};
