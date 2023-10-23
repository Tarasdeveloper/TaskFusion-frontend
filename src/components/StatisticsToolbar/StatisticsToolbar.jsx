import DataPicker from './DataPicker';

import {
  NextBtn,
  PrevBtn,
  SpaceBetween,
  NavigationPanel,
  ControlBtn,
} from '../../pages/Calendar/NavBar/Toolbar.styled';
import { StatisticsInfo, StatisticsInfoWrap } from '../StatisticsChart/StatisticsChart.styled';

const StatisticsToolbar = ({
  prevHandler,
  nextHandler,
  currentDate,
  setCurrentDate,
}) => {
  return (
    <NavigationPanel>
      <SpaceBetween>
        <div>
          {
            <DataPicker
              prevHandler={prevHandler}
              nextHandler={nextHandler}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
            />
          }
        </div>
        <ControlBtn>
          <PrevBtn onClick={prevHandler}>&lt;</PrevBtn>
          <NextBtn onClick={nextHandler}>&gt;</NextBtn>
        </ControlBtn>
      </SpaceBetween>
      <StatisticsInfoWrap>
        <StatisticsInfo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#FFD2DD" />
          </svg>
          <span>By day</span>
        </StatisticsInfo>
        <StatisticsInfo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#3E85F3" />
          </svg>
          <span>By month</span>
        </StatisticsInfo>
      </StatisticsInfoWrap>
    </NavigationPanel>
  );
};
export default StatisticsToolbar;
