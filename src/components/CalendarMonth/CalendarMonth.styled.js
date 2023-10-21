import styled from 'styled-components';
export const GridWrap = styled.div`
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: var(--calendar-month-border-color);
`;
export const CellWrap = styled.div`
  min-width: 47px;
  min-height: 94px;
  background-color: var(--calendar-day-primary-backgroundcolor);

  transition: var(--transition-changetheme-background-color);
`;
export const DateWrap = styled.div`
  height: 22px;
  width: 18px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;
export const RowInCell = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const GridWrapOfDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin-bottom: 14px;
  margin-top: 24px;

  border-radius: 5px;
`;
export const CellWrapOfDays = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  color: var(--calendar-month-primary-text-color);

  background-color: var(--tetriary-background-color);
  transition: var(--transition-changetheme-background-color),
    var(--transition-changetheme-color);

  &:nth-child(7n),
  &:nth-child(7n - 1) {
    color: var(--calendar-month-week-weekend-color);
  }
`;
export const Border = styled.div`
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--calendar-month-border-color);
`;

export const CurrentDay = styled.div`
  padding: 10px 8px;
  height: 100%;
  width: 100%;
  background: #3e85f3;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DayDate = styled.span`
  color: var(--calendar-month-primary-text-color);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  transition: var(--transition-changetheme-color);
`;
