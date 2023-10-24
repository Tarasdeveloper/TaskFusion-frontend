import { Wrap } from './ChoosedDay.styled';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import DayToolbar from './DayToolbar';
import { useNavigate, useParams } from 'react-router-dom';

import { PERIOD_TYPE_MONTH } from '../../pages/Calendar/constants';

export const ChoosedDay = () => {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  const currentMonth = new Date(currentDate);

  const setCurrentDate = (isoDate) => {
    navigate(`/calendar/day/${isoDate}`);
  };

  const switchToMonthPeriodType = (type) => {
    if (type === PERIOD_TYPE_MONTH) {
      navigate(`/calendar/month/${currentDate}`);
    }
  };

  return (
    <Wrap>
      <DayToolbar
        currentMonth={currentMonth}
        setCurrentDate={setCurrentDate}
        setPeriodType={switchToMonthPeriodType}
        periodType={PERIOD_TYPE_MONTH}
      />
      <DayCalendarHead />
      <TasksColumnsList />
    </Wrap>
  );
};
