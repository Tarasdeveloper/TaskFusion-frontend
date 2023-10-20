import { useState } from 'react';
import * as dateFns from 'date-fns';

import Toolbar from '../../components/CalendarMonth/Toolbar/Toolbar';
import {
  StatisticsPageContainer,
  StatisticsPageSection,
} from './StatisticsPage.styled';
import { StatisticsChart } from '../../components/StatisticsChart/StatisticsChart';

export const StatisticsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevHandler = () => {
    setCurrentDate((prevDate) => dateFns.subMonths(prevDate, 1));
  };
  const nextHandler = () => {
    setCurrentDate((prevDate) => dateFns.addMonths(prevDate, 1));
  };

  return (
    <StatisticsPageSection>
      <StatisticsPageContainer>
        <Toolbar
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          selectedDate={selectedDate}
          currentDate={currentDate}
        />
        <StatisticsChart/>
      </StatisticsPageContainer>
    </StatisticsPageSection>
  );
};
