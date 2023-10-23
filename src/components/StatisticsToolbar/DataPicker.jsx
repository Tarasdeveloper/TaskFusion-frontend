import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import {
  RightArrowIcon,
  LeftArrowIcon,
  DatepickerStyled,
} from '../../pages/Calendar/NavBar/DataPicker/StyledDataPicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const DataPicker = ({
  prevHandle,
  nextHandler,
  currentDate,
  setCurrentDate,
}) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <DatepickerStyled
        onClick={onClick}
        value={value}
        readOnly
      ></DatepickerStyled>
    );
  });

  return (
    <>
      <DatePicker
        selected={currentDate}
        onChange={(date) => {
          setCurrentDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
        nextMonthButtonLabel={<RightArrowIcon onClick={nextHandler} />}
        previousMonthButtonLabel={<LeftArrowIcon onClick={prevHandle} />}
      />
    </>
  );
};

export default DataPicker;
