import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 335px;
  height: 466px;
  margin-bottom: 20px;
  // display: flex;
  // gap: 16px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 14px;
    background-color: ${({ theme }) => theme.bgColors.taskScroll};
    border-radius: 12px;
    height: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bgColors.taskScrollThumb};
    border-radius: 12px;
  }
  @media (min-width: 768px) {
    max-width: 1087px;
    height: 718px;
    margin-bottom: 18px;
    // gap: 16px;
  }
  @media (min-width: 1440px) {
    max-width: 1087px;
    height: 585px;
    margin-bottom: 50px;
    // gap: 27px;
    overflow-x: hidden;
  }
`;
export const TaskList = styled.ul`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    gap: 27px;
  }
`;
export const TaskItem = styled.li`
  width: 100%;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const TaskContainer = styled.div`
  //   outline: 1px solid red;
  width: 335px;
  height: 432px;
  padding-top: 18px;
  padding-left: 14px;
  padding-right: 8px;
  background: ${({ theme }) => theme.bgColors.bgTaskList};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  position: relative;
  @media (min-width: 768px) {
    width: 344px;
    height: 568px;
  }
  @media (min-width: 1440px) {
    width: 344px;
  }
`;
export const TitleTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 34px;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    height: 38px;
    margin-bottom: 28px;
  }
  @media (min-width: 1440px) {
  }
`;
export const TitleTask = styled.p`
  color: ${({ theme }) => theme.textColors.main};
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin-left: 7px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
  }
`;
export const AddTaskButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  margin-right: 10px;

  background: inherit;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const AddTaskSvg = styled.svg`
  width: 22px;
  height: 22px;
  stroke: ${({ theme }) => theme.textColors.main};
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  @media (min-width: 1440px) {
  }
`;
export const AddButton = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  width: 290px;
  height: 48px;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border: 1px dashed ${({ theme }) => theme.borderColors.addTask};
  background: ${({ theme }) => theme.bgColors.hoverSideBarBg};
  border-radius: 8px;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
  left: 20px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.borderColors.addTask};
  }
  @media (min-width: 768px) {
    position: relative;
    width: 304px;

    // margin-bottom: 28px;
    margin-top: 28px;
    margin-left: 6px;
    left: 0;
  }
  @media (min-width: 1440px) {
  }
`;
export const SpanButtonText = styled.span`
  color: ${({ theme }) => theme.textColors.main};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const SpanButtonSvg = styled.span`
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const AddSvg = styled.svg`
  stroke: ${({ theme }) => theme.textColors.main};
  width: 24px;
  height: 24px;
  display: block;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
