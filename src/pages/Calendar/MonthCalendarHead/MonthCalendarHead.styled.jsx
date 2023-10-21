import styled from 'styled-components';

export const DaysList = styled.ul`
  background-color: ${({ theme }) => theme.bgColors.page};
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  display: grid;

  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 18px;
  }
`;

export const DaysItems = styled.li`
  align-items: center;
  color: ${({ theme }) => theme.textColors.main};
  font-weight: 600;
`;

export const WeekendDaysItems = styled(DaysItems)`
  color: ${({ theme }) => theme.notChangedcolors.accentColor};
`;
