import styled from 'styled-components';

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: stretch;
  gap: 1px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 52px;
`;

export const CellWrap = styled.button`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: right;
  padding: 8px 4px 4px 8px;
  height: 94px;
  border: none;
  align-items: flex-end;
  background-color: #fff;
  @media (min-width: 768px) {
    padding: 7px;
    height: 144px;
  }
  @media (min-width: 1440px) {
    height: 125px;
  }
`;

export const CalendarDate = styled.span`
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
  border-radius: 6px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: ${({ $current }) => ($current ? 'white;' : 'none;')};
  background-color: ${({ $current }) => ($current ? '#3E85F3;' : 'none;')};

  @media (min-width: 768px) {
    font-size: 16px;
    width: 27px;
    height: 26px;
  }
`;

export const GridWrapOfDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 14px;
  margin-top: 24px;
  border-radius: 5px;
  background-color: white;
  border-radius: 8px;
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
    color: #3e85f3;
  }
`;
export const CurrentDay = styled.div`
  padding: 4px 8px;
  height: 100%;
  width: 100%;
  background: #3e85f3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeekDay = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
`;
export const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  gap: 2px;
`;
export const TaskTitle = styled.li`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  border-radius: 4px;
  padding: 2px 6px 2px 6px;
  background-color: ${(props) => {
    switch (props.$priority) {
      case 'low':
        return '#CEEEFD';
      case 'medium':
        return '#FCF0D4;';
      case 'high':
        return '#FFD2DD';
      default:
        return 'none';
    }
  }};
  color: ${(props) => {
    switch (props.$priority) {
      case 'low':
        return '#3E85F3';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return 'none';
    }
  }};
`;