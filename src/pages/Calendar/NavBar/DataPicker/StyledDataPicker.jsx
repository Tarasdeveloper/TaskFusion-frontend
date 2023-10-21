import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  RightArrowIcon,
  LeftArrowIcon,
} from './StyledDataPicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const StyledDatepicker = ({ currentMonth }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(currentMonth, 'MMMM , yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={currentMonth}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        nextMonthButtonLabel={<LeftArrowIcon />}
        previousMonthButtonLabel={<RightArrowIcon />}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
