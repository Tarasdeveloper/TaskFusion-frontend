import { useEffect } from 'react';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';
import { Wrap } from './TasksColumnsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksThunk } from '../../redux/tasks/operations';
import { useParams } from 'react-router-dom';
import { selectTasks } from '../../redux/tasks/selectors';
import { refreshUserThunk } from '../../redux/auth/operations';

const TasksColumnsList = () => {
  const dispatch = useDispatch();
  const { currentDate } = useParams();
  const tasks = useSelector(selectTasks);

  const filtByDate = tasks.filter((task) => task.date === currentDate);

  const tasksArr = [[], [], []];

  filtByDate.forEach((el) => {
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
      <>
        <TasksColumnItem title={'To do'} tasks={tasksArr[0]}></TasksColumnItem>
        <TasksColumnItem
          title={'In progress'}
          tasks={tasksArr[1]}
        ></TasksColumnItem>
        <TasksColumnItem title={'Done'} tasks={tasksArr[2]}></TasksColumnItem>
      </>
    </Wrap>
  );
};

export default TasksColumnsList;
