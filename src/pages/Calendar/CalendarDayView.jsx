// import { useNavigate, useParams } from 'react-router-dom';
// import { CalendarToolbar } from '../../components/CalendarToolbar/CalendarToolbar';
// import { PERIOD_TYPE_DAY, PERIOD_TYPE_MONTH } from './constants';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';
import { Wrap } from './CalendarDayView.styled';

export default function CalendarDayView() {
  // const { currentDate } = useParams();
  // const navigate = useNavigate();

  // const setCurrentDate = (isoDate) => {
  //   navigate(`/calendar/day/${isoDate}`);
  // };

  // const switchToMonthPeriodType = (type) => {
  //   if (type === PERIOD_TYPE_MONTH) {
  //     navigate(`/calendar/month/${currentDate}`);
  //   }
  // };
  return (
    <Wrap>
      {/* <CalendarToolbar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={PERIOD_TYPE_DAY}
        setPeriodType={switchToMonthPeriodType}
      /> */}
      <ChoosedDay />
    </Wrap>
  );
}
