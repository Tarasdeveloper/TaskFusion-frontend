import { useState, useEffect, useMemo } from 'react';

function useCalendar(initialDateISO) {
  const initialDate = useMemo(() => new Date(initialDateISO), [initialDateISO]);
  const [daysOfMonth, setDaysOfMonth] = useState([]);

  useEffect(() => {
    const generateCalendar = () => {
      const year = initialDate.getFullYear();
      const month = initialDate.getMonth();

      // Set the first day of the month to the 1st day and the last day to the last day of the month
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      // Adjust the first day to start from Monday
      firstDay.setDate(1 - ((firstDay.getDay() + 6) % 7));
      lastDay.setDate(lastDay.getDate() + 6 - ((lastDay.getDay() + 6) % 7));

      const days = [];

      // Loop through each day from the first day to the last day
      for (
        let day = new Date(firstDay);
        day <= lastDay;
        day.setDate(day.getDate() + 1)
      ) {
        days.push({
          date: new Date(day),
          dayOfMonth: day.getDate(),
          isCurrentMonth: day.getMonth() === month,
        });
      }

      setDaysOfMonth(days);
    };

    generateCalendar();
  }, [initialDate]);

  return {
    daysOfMonth,
    initialDate,
  };
}

export default useCalendar;
