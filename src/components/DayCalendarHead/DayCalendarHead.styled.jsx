import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 25px;
  margin-bottom: 14px;
  background-color: var(--secondary-background-color);
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 10px 32px;
    margin-bottom: 16px;
  }

  @media (min-width: 1440px) {
    padding: 10px 47px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  .today {
    color: white;
    background-color: #3e85f3;
  }
  .full-name {
    display: block;
  }
  .short-name {
    display: none;
  }

  @media (max-width: 480px) {
    .full-name {
      display: none;
    }

    .short-name {
      display: block;
    }
  }

  @media (min-width: 768px) {
    gap: 4px;
  }
`;

export const Day = styled.p`
  font-weight: 600;
  line-height: 18px;
  color: var(--primary-text-color);
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

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    padding: 4px 8px;
  }
`;

export const OtherDay = styled(DateWeek)`
  background-color: var(--calendar-monthOrDay-active-text-color);
`;

export const ActiveDay = styled(DateWeek)`
  background-color: var(--primary-background-color);
  color: #343434;
`;
