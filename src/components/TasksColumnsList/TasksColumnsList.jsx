import { useEffect } from 'react';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';
import { Wrap } from './TasksColumnsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksThunk } from '../../redux/tasks/operations';
import { useParams } from 'react-router-dom';
import { selectTasks } from '../../redux/tasks/selectors';
import { refreshUserThunk } from '../../redux/auth/operations';

// const tasksArrExample = [
//   {
//     _id: 'some1351BSON142format232id',
//     title: 'Task 1',
//     start: '09:00',
//     end: '21:00',
//     priority: 'medium',
//     date: '2023-10-20',
//     category: 'to-do',
//     ownerId: 'some1351BSON142format232id',
//   },
//   {
//     _id: 'some1351BSON142format232id',
//     title: 'Task 2',
//     start: '09:00',
//     end: '21:00',
//     priority: 'low',
//     date: '2023-10-20',
//     category: 'to-do',
//     ownerId: 'some1351BSON142format232id',
//   },
//   {
//     _id: 'some1351BSON142format232id',
//     title: 'Task 3',
//     start: '09:00',
//     end: '21:00',
//     priority: 'high',
//     date: '2023-10-20',
//     category: 'done',
//     ownerId: 'some1351BSON142format232id',
//   },
//   {
//     _id: 'some1351BSON142format232id',
//     title: 'Task 4',
//     start: '09:00',
//     end: '21:00',
//     priority: 'medium',
//     date: '2023-10-20',
//     category: 'in-progress',
//     ownerId: 'some1351BSON142format232id',
//   },
//   {
//     _id: 'some1351BSON142format232id',
//     title: 'Task 5',
//     start: '09:00',
//     end: '21:00',
//     priority: 'low',
//     date: '2023-10-20',
//     category: 'to-do',
//     ownerId: 'some1351BSON142format232id',
//   },
// ];

const TasksColumnsList = () => {
  const dispatch = useDispatch();
  const { currentDate } = useParams();
  const tasks = useSelector(selectTasks);

  const tasksArr = [[], [], []]; // ! tasksArr[0] - to-do ; tasksArr[1] - in-progress ; tasksArr[2] - done
  tasks.forEach((el) => {
    el.category === 'to-do'
      ? tasksArr[0].push(el)
      : el.category === 'in-progress'
      ? tasksArr[1].push(el)
      : tasksArr[2].push(el);
  });

  useEffect(() => {
    (async () => {
      await dispatch(refreshUserThunk());
      await dispatch(getTasksThunk(currentDate));
    })();
  }, [dispatch, currentDate]);

  return (
    <Wrap>
      <TasksColumnItem title={'To do'} tasks={tasksArr[0]}></TasksColumnItem>
      <TasksColumnItem
        title={'In progress'}
        tasks={tasksArr[1]}
      ></TasksColumnItem>
      <TasksColumnItem title={'Done'} tasks={tasksArr[2]}></TasksColumnItem>
    </Wrap>
  );
};

export default TasksColumnsList;
