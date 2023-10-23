import { styled, createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const LeftArrowIcon = () => <div>&gt;</div>;
export const RightArrowIcon = () => <div>&lt;</div>;
export const TitleWrapper = styled.button`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
  border-color: transparent;
`;

export const DatepickerStyled = styled.input`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
  border-color: transparent;
`;

export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker__wrapper {
    position: relative;
  }
.react-datepicker {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 235px;
    height: 280px;
    padding: 9px 18px;
    background-color: #3e85f3;
    font-family: Inter;
    border-radius: 8px;
    margin-top: 8px;
  }

  .react-datepicker__day{
    color: white;
    display: inline-block;
    width: 1.7rem;
    line-height: 18px;
    text-align: center;
    
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__current-month {
    display:flex;
    align-items: center;
    justify-content:center;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
    align-items:center;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .react-datepicker__aria-live{
    display:none;
  }
  .react-datepicker__navigation--previous{
    display:flex;
    justify-content:space-between;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    overflow: hidden;
}
.react-datepicker__navigation {
    margin-top: 8px;
    color: white;
}
.react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    margin-left: 18px;
    margin-top: 16px;
}
.react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
    margin-right:18px;
    margin-top: 16px;
}
`;
