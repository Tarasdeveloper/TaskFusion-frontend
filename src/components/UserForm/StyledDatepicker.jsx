import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import uk from 'date-fns/locale/uk';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Input } from './UserForm.styled';
import { addDays, isWeekend } from 'date-fns';

registerLocale('uk', uk);

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
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
          name="newBirthday"
          placeholder="dd/MM/yyyy"
          value={selectedDate.toString()}
        />
      }
    />
  );
};

export default StyledDatepicker;
