import PropTypes from 'prop-types';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';

import { Wrapper } from './CalendarToolbar.styled';

export const CalendarToolbar = ({
  periodType,
  setPeriodType,
  currentDate,
  setCurrentDate,
}) => {
  return (
    <Wrapper>
      <PeriodPaginator
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={periodType}
      />
      <PeriodTypeSelect periodType={periodType} setPeriodType={setPeriodType} />
    </Wrapper>
  );
};

CalendarToolbar.propTypes = {
  periodType: PropTypes.string.isRequired,
  setPeriodType: PropTypes.func.isRequired,
  currentDate: PropTypes.string.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};
