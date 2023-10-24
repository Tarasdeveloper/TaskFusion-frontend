import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: var(--primary-background-color);
  padding: 14px 18px;
  color: var(--secondary-text-color);
  margin-bottom: 14px;
  margin-top: 24px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media (min-width: 768px) {
    gap: 4px;
  }
`;

export const Day = styled.span`
  color: var(--secondary-text-color);

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  &.weekend {
    color: var(--calendar-day-task-buttons-active-color);
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const DateWeek = styled.button`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border: none;
  border-radius: 6px;
  padding: 4px 6px;
  color: var(--primary-background-color);
  background-color: inherit;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    width: 27px;
    height: 26px;
    padding: 4px 8px;
  }

  @media (min-width: 1440px) {
    padding: 4px 8px;
  }

  &:hover {
    background-color: var(--calendar-day-addTask-btn-background-color);
    color: var(--calendar-day-task-buttons-active-color);
  }
`;

export const OtherDay = styled(DateWeek)`
  background-color: var(--calendar-monthOrDay-active-text-color);
`;

export const ActiveDay = styled(DateWeek)`
  background-color: var(--primary-background-color);
  color: #343434;
`;
