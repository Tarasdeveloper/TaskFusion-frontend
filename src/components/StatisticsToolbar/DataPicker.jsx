import { forwardRef, useState } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  RightArrowIcon,
  LeftArrowIcon,
} from '../../pages/Calendar/NavBar/DataPicker/StyledDataPicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const DataPicker = ({ currentDate, prevHandler, nextHandler }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(currentDate, 'MMMM , yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={currentDate}
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

export default DataPicker;
