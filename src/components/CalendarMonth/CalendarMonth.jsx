import * as dateFns from 'date-fns';
import { useEffect, useState } from 'react';
import {
  Border,
  CellWrap,
  CellWrapOfDays,
  CurrentDay,
  DateWrap,
  DayDate,
  GridWrap,
  GridWrapOfDays,
  RowInCell,
} from './CalendarMonth.styled';

const formatOfDay = 'd';
/* const formatOfWeek = 'EEEEE'; */
console.log(window.innerWidth);

const CalendarMonth = ({ daysOfWeek, totalDate }) => {
  const [formatOfWeek, setFormatOfWeek] = useState('EEEEE');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFormatOfWeek('EEE');
      } else {
        setFormatOfWeek('EEEEE');
      }
    };

    handleResize(); // Вызываем при загрузке компонента

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleDateClick = (date) => {
    console.log(dateFns.format(date, 'MM/dd/yyyy'));
  };

  const isCurrentDay = (date) => {
    return dateFns.isToday(date);
  };

  return (
    <>
      <GridWrapOfDays>
        {daysOfWeek.map((day) => (
          <CellWrapOfDays key={day.toString()}>
            <span>{dateFns.format(day, formatOfWeek)}</span>
          </CellWrapOfDays>
        ))}
      </GridWrapOfDays>
      <Border>
        <GridWrap>
          {totalDate.map((date) => (
            <CellWrap
              key={date.toString()}
              onClick={() => handleDateClick(date)}
            >
              <RowInCell>
                <DateWrap>
                  {isCurrentDay(date) ? (
                    <CurrentDay>
                      <DayDate>{dateFns.format(date, formatOfDay)}</DayDate>
                    </CurrentDay>
                  ) : (
                    <DayDate>{dateFns.format(date, formatOfDay)}</DayDate>
                  )}
                </DateWrap>
              </RowInCell>
            </CellWrap>
          ))}
        </GridWrap>
      </Border>
    </>
  );
};

export default CalendarMonth;
