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
  text-align: right;
  padding-top: 8px;
  padding-right: 4px;
  padding-bottom: 4px;
  height: 94px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: none;
  align-items: flex-end;
  background-color: #fff;
  @media (min-width: 768px) {
    padding-top: 14px;
    padding-right: 14px;
    padding-bottom: 8px;
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
