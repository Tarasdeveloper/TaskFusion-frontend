import { format } from 'date-fns';
import StyledDatepicker from './DataPicker/StyledDataPicker';
import { useParams } from 'react-router-dom';
import {
  DayBtn,
  MonthBtn,
  NextBtn,
  PrevBtn,
  SpaceBetween,
  NavigationPanel,
  ControlBtn,
  BtnOfCalender,
} from './Toolbar.styled';
import { PERIOD_TYPE_DAY, PERIOD_TYPE_MONTH } from '../constants';

const Toolbar = ({
  currentMonth,
  setCurrentDate,
  setPeriodType,
  periodType,
}) => {
  const { currentDate } = useParams();

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
    <NavigationPanel>
      <SpaceBetween>
        <div>
          {
            <StyledDatepicker
              currentMonth={currentMonth}
              setCurrentDate={setCurrentDate}
            />
          }
        </div>
        <ControlBtn>
          <PrevBtn onClick={prevHandler}>&lt;</PrevBtn>
          <NextBtn onClick={nextHandler}>&gt;</NextBtn>
        </ControlBtn>
      </SpaceBetween>
      <BtnOfCalender>
        <MonthBtn
          onClick={() => setPeriodType(PERIOD_TYPE_MONTH)}
          $isActive={periodType === PERIOD_TYPE_MONTH}
        >
          Month
        </MonthBtn>
        <DayBtn
          onClick={() => setPeriodType(PERIOD_TYPE_DAY)}
          $isActive={periodType === PERIOD_TYPE_DAY}
        >
          Day
        </DayBtn>
      </BtnOfCalender>
    </NavigationPanel>
  );
};
export default Toolbar;
