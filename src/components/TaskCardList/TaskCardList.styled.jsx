import styled from 'styled-components';

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.bgColors.bgTaskList};
  height: 334px;
  max-width: 335px;
  // padding: 7px;
  @media (min-width: 768px) {
    height: 372px;
   max- width: 301px;
  }
`;

export const TaskListContainer = styled.div`
  height: 100%;
  width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 7px;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.bgColors.taskScroll};
    border-radius: 12px;
    height: 334px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bgColors.taskScrollThumb};
    border-radius: 12px;
  }
`;
export const TaskItem = styled.li`
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const TaskContainer = styled.div`
  //   outline: 1px solid red;
  scroll-snap-align: start;
  height: 108px;
  width: 100%;
  background: ${({ theme }) => theme.bgColors.bgTask};
  margin-bottom: 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColors.taskBorder};
  padding: 14px;

  @media (min-width: 768px) {
    height: 112px;
    margin-bottom: 18px;
  }
`;
export const TaskText = styled.p`
  overflow: hidden;
  color: ${({ theme }) => theme.textColors.taskText};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 28px;
`;
export const UserFoto = styled.img`
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const StatusContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${props => props.$status};
`;
export const StatusText = styled.p`
  color: #f7f6f9;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
export const SvgButton = styled.button`
  cursor: pointer;
  display: flex;
  background: inherit;
  border: none;
  padding: 0;
`;
export const SvgIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.textColors.main};
  &:hover {
    stroke: ${({ theme }) => theme.notChangedcolors.accentColor};
  }
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
