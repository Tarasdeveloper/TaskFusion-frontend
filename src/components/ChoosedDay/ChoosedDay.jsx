import { Wrap } from './ChoosedDay.styled';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import DayCalendarHead from '../DayCalendarHead/DayCalendarHead';
import Toolbar from '../../pages/Calendar/NavBar/Toolbar';
import { useNavigate, useParams } from 'react-router-dom';

import {
  PERIOD_TYPE_DAY,
  PERIOD_TYPE_MONTH,
} from '../../pages/Calendar/constants';

export const ChoosedDay = () => {
  const { currentDate } = useParams();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentMonth = new Date(currentDate);

  const setCurrentDate = (isoDate) => {
    navigate(`/calendar/month/${isoDate}`);
  };

  const switchToDayPeriodType = (type) => {
    if (type === PERIOD_TYPE_DAY) {
      navigate(`/calendar/day/${currentDate}`);
    }
  };

  const prevHandler = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(format(prevMonth, 'yyyy-MM-dd'));
  };

  const nextHandler = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(format(nextMonth, 'yyyy-MM-dd'));
  };

  return (
    <Wrap>
      <Toolbar
        currentMonth={currentMonth}
        setCurrentDate={setCurrentDate}
        setPeriodType={switchToDayPeriodType}
        periodType={PERIOD_TYPE_MONTH}
      />
      <DayCalendarHead />
      <TasksColumnsList />
    </Wrap>
  );
};
