import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import uk from 'date-fns/locale/uk';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Input } from './UserForm.styled';
import { addDays, isWeekend, parse } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

registerLocale('uk', uk);

const StyledDatepicker = () => {
  const { birthDay } = useSelector(selectUser);
  const [selectedDate, setSelectedDate] = useState(
    birthDay === null ? new Date() : parse(birthDay, 'dd/MM/yyyy', new Date()),
  );

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      calendarStartDay={1}
      selected={selectedDate}
      maxDate={addDays(new Date(), 0)}
      highlightDates={(date) => isWeekend(date)}
      onChange={(date) => setSelectedDate(date)}
      customInput={
        <Input
          type="text"
          name="birthDay"
          placeholder="dd/MM/yyyy"
          value={selectedDate.toString()}
        />
      }
    />
  );
};

export default StyledDatepicker;
