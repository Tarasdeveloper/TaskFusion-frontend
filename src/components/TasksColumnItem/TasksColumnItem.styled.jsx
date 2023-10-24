import styled from 'styled-components';
//! (375, 768, 1440)

const Wrapper = styled.div`
  padding-top: 18px;
  padding-left: 17px;
  padding-right: 18px;
  border-radius: 8px;

  min-width: 336px;
  direction: ltr;
  border: 1px solid var(--calendar-day-task-border-color);
  background-color: var(--tetriary-background-color);
  position: relative;

  transition: var(--transition-changetheme-background-color),
  var(--transition-changetheme-border-color);

  height: ${(props) => (props.$isTasksAdded ? '442px' : '155px')};
  padding-bottom: ${(props) => (props.$isTasksAdded ? '10px' : '0px')};

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    padding: ${(props) =>
      props.$isTasksAdded ? '18px 18px 112px 17px' : '20px 20px 107px 20px'};
    height: ${(props) => (props.$isTasksAdded ? '568px' : '165px')};
    width: 344px;
    
  }

  @media (min-width: 1440px) {
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.$isTasksAdded ? '24px' : '35px')};

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    margin-bottom: ${(props) => (props.$isTasksAdded ? '28px' : '35px')};
  }

  @media (min-width: 1440px) {
  }
`;

const Title = styled.p`
  color: var(--primary-text-color);
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  transition: var(--transition-changetheme-color);

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    font-family: Inter;
    font-size: 20px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
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
  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1440px) {
  }
`;

const AddTaskBtn = styled.button`
  type: 'button';
  padding: 12px 100px;
  padding-top: 13px;
  border-radius: 8px;
  border: 1px dashed var(--calendar-day-addTask-btn-border-color);
  background-color: var(--calendar-day-addTask-btn-background-color);
  outline: none;
  position: absolute;
  bottom: ${(props) => (props.$isTasksAdded ? '10px' : '20px')};
  right: 18px;
  left: 18px;
  z-index: 1;
  transition: var(--transition-changetheme-background-color);

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    bottom: ${(props) => (props.$isTasksAdded ? '28px' : '20px')};
    padding: 14px 20px 14px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1440px) {
  }
`;

const BtnContentWrap = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

const AddTaskText = styled.p`
  color: #111;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

const TasksWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  height: 314px;
  padding-bottom: 14px;

  overflow-y: scroll;


  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    height: 372px;
    padding-bottom: 0px;
    row-gap: 18px;
  }

  @media (min-width: 1440px) {
  }
`;

const Task = styled.div`
  border-radius: 8px;
  border: 1px solid var(--calendar-day-task-border-color);
  background-color: var(--secondary-background-color);
  padding: 14px 12px 18px 15px;
  width: 299px;
  transition: var(--transition-changetheme-background-color),
    var(--transition-changetheme-border-color);

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    padding: 14px 14px 18px 14px;
    height: 112px;
  }

  @media (min-width: 1440px) {
  }
`;

const TaskTitle = styled.p`
  display: block;
  max-width: 272px;
  margin-bottom: 28px;

  overflow: hidden;
  text-overflow: ellipsis;

  color: var(--primary-text-color);
  white-space: nowrap;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  transition: var(--transition-changetheme-color);

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
  }
`;

const TaskBottomWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

const AvatarPriorWrap = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: end;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;
const Avatar = styled.div`
  margin-top: 1px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(220, 227, 229, 0.8);
  border: 1.8px solid #3e85f3;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }

  @media (min-width: 1440px) {
  }
`;
const Priority = styled.div`
  padding: 4px 12px;
  border-radius: 4px;

  color: #f7f6f9;
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;

  background-color: ${(props) =>
    props.$priority === 'Low'
      ? '#72C2F8'
      : props.$priority === 'Medium'
      ? '#F3B249'
      : '#EA3D65'};

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

const IconBtnsWrap = styled.div`
  display: flex;
  column-gap: 10px;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

const IconBtnWrap = styled.button`
  type: button;
  outline: none;
  border: none;
  width: fit-content;
  height: fit-content;
  width: 16px;
  height: 16px;
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
  Priority,
  IconBtnsWrap,
  IconBtnWrap,
};
