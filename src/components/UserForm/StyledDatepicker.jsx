import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import uk from 'date-fns/locale/uk';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Input } from './UserForm.styled';

registerLocale('uk', uk);

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      calendarStartDay={1}
      selected={selectedDate}
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
