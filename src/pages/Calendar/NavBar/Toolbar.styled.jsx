import styled from 'styled-components';

export const NavigationPanel = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const BtnOfCalender = styled.div`
  margin-top: 10px;
  @media (min-wigth: 768px) {
    margin-top: 0px;
  }
`;
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`;
export const MonthBtn = styled.button`
  border-radius: 8px 0px 0px 8px;
  padding: 8px 16px;
  color: var(--calendar-monthOrDay-text-color);
  border-color: transparent;
  border-right: 1px solid var(--calendar-monthOrDay-border-color);
  transition: var(--transition-changetheme-background-color);
  background-color: ${({ $isActive }) => ($isActive ? '#CAE8FF' : '#E3F3FF;')};
`;

export const DayBtn = styled.button`
  padding: 8px 25px;
  border-radius: 0px 8px 8px 0px;
  border-color: transparent;
  color: var(--calendar-monthOrDay-text-color);
  transition: var(--transition-changetheme-background-color);
  background-color: ${({ $isActive }) => ($isActive ? '#CAE8FF' : '#E3F3FF;')};
`;

export const NextBtn = styled.button`
  padding: 8px 12px;
  border-radius: 0px 8px 8px 0px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: var(--calendar-day-primary-backgroundcolor);
  transition: var(--transition-changetheme-background-color);
  @media (min-width: 768px) {
    padding: 10px 14px;
  }
`;
export const PrevBtn = styled.button`
  padding: 8px 12px;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: var(--calendar-day-primary-backgroundcolor);
  transition: var(--transition-changetheme-background-color);

  @media (min-width: 768px) {
    padding: 10px 14px;
  }
`;
export const ControlBtn = styled.div`
  @media (min-width: 768px) {
    margin-left: 8px;
  }
`;
