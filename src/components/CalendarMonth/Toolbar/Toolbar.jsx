import React, { useState } from 'react';
import StyledDatepicker from '../datapicker/DataPicker';

import {
  DayBtn,
  MonthBtn,
  NextBtn,
  PrevBtn,
  SpaceBetween,
  NavigationPanel,
  ControlBtn,
  BtnOfCalender,
} from './Toolbar.styled';

const Toolbar = ({ prevHandler, nextHandler, currentDate }) => {
  return (
    <NavigationPanel>
      <SpaceBetween>
        <div>
          {
            <StyledDatepicker
              prevHandler={prevHandler}
              nextHandler={nextHandler}
              currentDate={currentDate}
            />
          }
        </div>
        <ControlBtn>
          <PrevBtn onClick={prevHandler}>&lt;</PrevBtn>
          <NextBtn onClick={nextHandler}>&gt;</NextBtn>
        </ControlBtn>
      </SpaceBetween>
      <BtnOfCalender>
        <MonthBtn>Month</MonthBtn>
        <DayBtn>Day</DayBtn>
      </BtnOfCalender>
    </NavigationPanel>
  );
};
export default Toolbar;
