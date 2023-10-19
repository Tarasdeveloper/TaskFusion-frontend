import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  background: var(--primary-background-color);
  border: var(--border-calendar);
  border-radius: 8px;
  @media (min-width: 768px) {
    border: var(--border);
  }
`;
export const ListMonth = styled(List)`
  grid-template-rows: 50px;
  @media (min-width: 768px) {
    grid-template-rows: 46px;
  }
`;
export const ListDays = styled(List)`
  grid-template-rows: 74px;
  @media (min-width: 768px) {
    grid-template-rows: 68px;
  }
`;

export const Month = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Days = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  padding-top: 10px;
`;

const Day = styled.div`
  font-family: var(--primary-font);
  font-style: normal;

  text-transform: uppercase;

  color: var(--secondary-text-color);
  text-align: center;
`;

export const DayWeek = styled(Day)`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12px;
`;

export const OtherMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  pointer-events: none;
`;
export const CurrentMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;

const DateOfWeek = styled(Day)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.17px;

  width: 24px;
  height: 24px;
  padding: 4px 6px;
  color: var(--calendar-digit-color);
  border-radius: 6px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12px;
    width: 27px;
    height: 26px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`;

export const ChoosedDate = styled(DateOfWeek)`
  background-color: var(--accent-background-color);
  color: var(--btn-text-color);
`;
export const DateOfWeekCurrentMonth = styled(DateOfWeek)`
  transition: box-shadow var(--animation);

  &:hover,
  :focus {
    box-shadow: 4px 4px 24px rgba(136, 165, 191, 1);
  }
`;

export const DateOfWeekOtherMonth = styled(DateOfWeek)`
  opacity: 0.3;
`;