import styled, { css } from 'styled-components';

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: stretch;
  gap: 1px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 52px;

  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  @media (min-width: 768px) {
    margin-bottom: 42px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const GridItem = styled.button`
  background-color: ${({ theme }) => theme.bgColors.page};
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

export const CalendarDate = styled.p`
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
  color: ${({ $current, theme }) =>
    $current ? theme.notChangedcolors.textBtnColor : theme.textColors.main};
  background-color: ${({ $current, theme }) =>
    $current ? theme.notChangedcolors.accentColor : 'none'};

  @media (min-width: 768px) {
    font-size: 16px;
    width: 27px;
    height: 26px;
  }
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.scrollBarColors.barBgColor};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollBarColors.thumbBgColor};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.scrollBarColors.thumbHoverColor};
  }
  @media (min-width: 768px) {
    gap: 4px;
  }
`;

export const TodoItem = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  text-align: start;
  ${props => {
    switch (props.$priority) {
      case 'low':
        return css`
          color: ${({ theme }) => theme.notChangedcolors.accentColor};
          background-color: ${({ theme }) =>
            theme.notChangedcolors.calendarTodosBG.lowColor};
        `;
      case 'medium':
        return css`
          color: ${({ theme }) => theme.notChangedcolors.mediumPriorColor};
          background-color: ${({ theme }) =>
            theme.notChangedcolors.calendarTodosBG.mediumColor};
        `;
      case 'high':
        return css`
          color: ${({ theme }) => theme.notChangedcolors.highPriorColor};
          background-color: ${({ theme }) =>
            theme.notChangedcolors.calendarTodosBG.highColor};
        `;

      default:
        return css`
          color: ${({ theme }) =>
            theme.notChangedcolors.addTaskCancelBtn.textColor};
          background-color: ${({ theme }) =>
            theme.notChangedcolors.addTaskCancelBtn.bgColor};
        `;
    }
  }}

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding-left: 10px;
  }
`;
