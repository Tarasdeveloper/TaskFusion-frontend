import styled from 'styled-components';
//! (375, 768, 1440)

const Wrapper = styled.div`
  padding-top: 18px;
  padding-left: 17px;
  padding-right: ${(props) => (props.$isTasksAdded ? '6px' : '18px')};
  flex: 1;
  border-radius: 8px;
  min-width: 299px;
  direction: ltr;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: var(--primary-background-color);
  position: relative;

  height: ${(props) => (props.$isTasksAdded ? '442px' : '155px')};
  padding-bottom: ${(props) => (props.$isTasksAdded ? '0' : '0px')};

  @media (min-width: 768px) {
    padding: ${(props) =>
      props.$isTasksAdded ? '18px 18px 112px 17px' : '20px 20px 107px 20px'};
    height: ${(props) => (props.$isTasksAdded ? '568px' : '165px')};
    min-width: 344px;
    padding-right: 8px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.$isTasksAdded ? '24px' : '35px')};
  padding-right: ${(props) => (props.$isTasksAdded ? '12px' : '0px')};

  @media (min-width: 768px) {
    margin-bottom: ${(props) => (props.$isTasksAdded ? '28px' : '35px')};
    padding-right: ${(props) => (props.$isTasksAdded ? '15px' : '12px')};
  }
`;

const Title = styled.p`
  color: var(--primary-text-color);
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media (min-width: 768px) {
    font-family: Inter;
    font-size: 20px;
    line-height: 24px;
  }
`;

const PlusCircleIcon = styled.button`
  outline: none;
  border: none;
  width: 22px;
  height: 22px;
  fill: none;

  &:hover {
    fill: rgba(62, 133, 243, 1);
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const AddTaskBtn = styled.button`
  type: 'button';
  max-width: 90%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed var(--btn-background-color);
  background: var(--calendar-day-addTask-btn-background-color);
  outline: none;
  position: absolute;
  bottom: ${(props) => (props.$isTasksAdded ? '10px' : '20px')};
  right: 18px;
  left: 18px;

  @media (min-width: 768px) {
    bottom: ${(props) => (props.$isTasksAdded ? '28px' : '20px')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
  }
`;

const BtnContentWrap = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

const AddTaskText = styled.p`
  color: var(--primary-text-color);
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

const TasksWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  height: 314px;
  padding-bottom: 14px;
  padding-right: 6px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px; /* Ширина скролбара для вебкіт-браузерів (Chrome, Safari) */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e7e5e5; /* Колір пальця скролбара для вебкіт-браузерів */
    border-radius: 12px; /* Закруглені кути пальця скролбара для вебкіт-браузерів */
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2; /* Колір треку скролбара для вебкіт-браузерів */
    border-radius: 12px; /* Закруглені кути треку скролбара для вебкіт-браузерів */
  }

  @media (min-width: 768px) {
    height: 372px;
    padding-right: 7px;
    row-gap: 18px;
  }
`;

const Task = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: var(--secondary-background-color);
  padding: 14px 12px 18px 15px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 14px 14px 18px 14px;
    height: 112px;
    min-width: 300px;
  }
`;

const TaskTitle = styled.p`
  display: block;
  width: 100%;
  margin-bottom: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-text-color);
  white-space: nowrap;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

const TaskBottomWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const AvatarPriorWrap = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: end;
`;

export const WithoutAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 1px;
  border-radius: 50%;
  border: 1.8px solid var(--userprofile-photo-border-color);
  background-color: rgba(220, 227, 229, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-changetheme-background-color);
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const IconUser = styled.svg`
  width: 48px;
  height: 48px;
  fill: var(--btn-background-color);
  fill-opacity: 0.18;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 1.8px solid #3e85f3;
  border-radius: 50%;

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const Priority = styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  color: var(--secondary-background-color);
  text-transform: capitalize;
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  background-color: ${(props) =>
    props.$priority === 'low'
      ? 'var(--calendar-day-task-levels-low-color)'
      : props.$priority === 'medium'
      ? 'var(--calendar-day-task-levels-medium-color)'
      : 'var(--calendar-day-task-levels-high-color)'};
`;

const IconBtnsWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;

const IconBtnWrap = styled.button`
  type: button;
  outline: none;
  border: none;
  width: fit-content;
  height: fit-content;
  width: 14px;
  height: 14px;
  fill: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    fill: rgba(62, 133, 243, 1);
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1440px) {
  }
`;

export {
  Wrapper,
  TitleWrap,
  Title,
  PlusCircleIcon,
  AddTaskBtn,
  AddTaskText,
  BtnContentWrap,
  TasksWrap,
  Task,
  TaskTitle,
  TaskBottomWrap,
  AvatarPriorWrap,
  Avatar,
  IconUser,
  Priority,
  IconBtnsWrap,
  IconBtnWrap,
};
