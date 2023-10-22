import { forwardRef, useState } from 'react';
import { format, formatISO } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  RightArrowIcon,
  LeftArrowIcon,
} from './StyledDataPicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Navigate, useNavigate } from 'react-router-dom';
const StyledDatepicker = ({ currentMonth, setCurrentDate }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const navigate = useNavigate();
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(currentMonth, 'MMMM , yyyy')}
      </TitleWrapper>
    );
  });
  const handleDateClick = (date) => {
    setCurrentDate(date);
    const formatedDate = formatISO(date, { representation: 'date' });
    navigate(`/calendar/day/${formatedDate}`);
  };

  return (
    <>
      <DatePicker
        selected={currentMonth}
        onChange={(date) => handleDateClick(date)}
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
