import { useMediaQuery } from '@chakra-ui/react';
import {
  DaysList,
  DaysItems,
  WeekendDaysItems,
} from './MonthCalendarHead.styled';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export default function MonthCalendarHead() {
  const [sliceDayName] = useMediaQuery('(min-width: 768px)');

  return (
    <DaysList>
      {workDayNames.map(item => (
        <DaysItems key={item}>
          {sliceDayName ? item : item.slice(0, 1)}
        </DaysItems>
      ))}
      {weekendDayNames.map(item => (
        <WeekendDaysItems key={item}>
          {sliceDayName ? item : item.slice(0, 1)}
        </WeekendDaysItems>
      ))}
    </DaysList>
  );
}
