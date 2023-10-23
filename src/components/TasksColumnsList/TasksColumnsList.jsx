// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import * as ReactDOM from 'react-dom';
// import { format } from 'date-fns';
// import { useEffect, useState } from 'react';

// // import {
// //   MainContainer,
// //   TaskContainer,
// //   TitleTask,
// //   TitleTaskContainer,
// //   AddTaskButton,
// //   AddTaskSvg,
// //   AddButton,
// //   SpanButtonText,
// //   SpanButtonSvg,
// //   AddSvg,
// //   TaskList,
// //   TaskItem,
// // } from './TasksColumnsList.styled';
// import Icon from '../../assets/sprite.svg';
// import TaskCardList from '../TaskCardList/TaskCardList';
// import { selectTasks } from '../../redux/calendar/calendar.selectors';
// import { getTasksOfMonth } from '../../redux/calendar/calendar.operations';
// import { TaskModal } from '../TaskModal/TaskModal';

// const initialColums = ['to-do', 'in-progress', 'done'];

// const TasksColumnsList = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [taskStatus, setTaskStatus] = useState('');

//   const { currentDate } = useParams();
//   const userTasks = useSelector(selectTasks);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       getTasksOfMonth({
//         month: +format(new Date(currentDate), 'M') - 1,
//         year: format(new Date(currentDate), 'yyyy'),
//       }),
//     );
//   }, [currentDate, dispatch]);

//   const currentTask = userTasks
//     .filter((userTasks) => userTasks.date === currentDate)
//     .sort(sortForStatus);

//   function sortForStatus(a, b) {
//     if (a.priority === 'high') {
//       return 1;
//     }
//     if (b.priority === 'low') {
//       return 0;
//     }
//     return -1;
//   }

//   const sortTaskForColums = (status) => {
//     return currentTask.filter((currentTask) => currentTask.category === status);
//   };

//   const onClose = () => {
//     setIsOpen(false);
//   };
//   const onOpen = (e) => {
//     setIsOpen(true);
//     setTaskStatus(e.currentTarget.name);
//   };

//   return (
//     <MainContainer>
//       <TaskList>
//         {initialColums.map((status) => (
//           <TaskItem key={status}>
//             <TaskContainer>
//               <TitleTaskContainer>
//                 <TitleTask>{status}</TitleTask>
//                 <AddTaskButton name={status} onClick={onOpen}>
//                   <AddTaskSvg>
//                     <use href={Icon + '#plus-circle'} />
//                   </AddTaskSvg>
//                 </AddTaskButton>
//               </TitleTaskContainer>
//               <TaskCardList task={sortTaskForColums(status)} />
//               <AddButton name={status} onClick={onOpen}>
//                 <SpanButtonSvg>
//                   <AddSvg>
//                     <use href={Icon + '#plus'} />
//                   </AddSvg>
//                 </SpanButtonSvg>
//                 <SpanButtonText>Add task</SpanButtonText>
//               </AddButton>
//             </TaskContainer>

//             {isOpen &&
//               ReactDOM.createPortal(
//                 <TaskModal onClose={onClose} status={taskStatus} />,
//                 document.querySelector('#modal-root'),
//               )}
//           </TaskItem>
//         ))}
//       </TaskList>
//     </MainContainer>
//   );
// };
// export default TasksColumnsList;

import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';
import { Wrap } from './TasksColumnsList.styled';

const TasksColumnsList = () => {
  return (
    <Wrap>
      <TasksColumnItem title={'To do'}></TasksColumnItem>
      <TasksColumnItem title={'In progress'}></TasksColumnItem>
      <TasksColumnItem title={'Done'}></TasksColumnItem>
    </Wrap>
  );
};

export default TasksColumnsList;
