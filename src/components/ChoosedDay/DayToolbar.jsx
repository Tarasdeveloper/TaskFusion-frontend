import { format } from 'date-fns';
import StyledDatepicker from '../../pages/Calendar/NavBar/DataPicker/StyledDataPicker';
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
} from './DayToolbar.styled';
import {
  PERIOD_TYPE_DAY,
  PERIOD_TYPE_MONTH,
} from '../../pages/Calendar/constants';

const DayToolbar = ({
  currentMonth,
  setCurrentDate,
  setPeriodType,
  //   periodType,
}) => {
  const { currentDate } = useParams();

  const prevHandler = () => {
    const prevDay = new Date(currentMonth);
    prevDay.setHours(prevDay.getHours() - 24);
    setCurrentDate(format(prevDay, 'yyyy-MM-dd'));
  };

  const nextHandler = () => {
    const nextDay = new Date(currentDate);
    nextDay.setHours(nextDay.getHours() + 24);
    setCurrentDate(format(nextDay, 'yyyy-MM-dd'));
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
          $isActive={
            false
            // periodType === PERIOD_TYPE_MONTH
          }
        >
          Month
        </MonthBtn>
        <DayBtn
          onClick={() => setPeriodType(PERIOD_TYPE_DAY)}
          $isActive={
            true
            // periodType === PERIOD_TYPE_DAY
          }
        >
          Day
        </DayBtn>
      </BtnOfCalender>
    </NavigationPanel>
  );
};
export default DayToolbar;
