import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';
import { Wrap } from './TasksColumnsList.styled';

const TasksColumnsList = () => {
  //   const isTasksAdded = true;
  return (
    <Wrap>
      <TasksColumnItem title={'To do'}></TasksColumnItem>
      <TasksColumnItem title={'In progress'}></TasksColumnItem>
      <TasksColumnItem title={'Done'}></TasksColumnItem>
    </Wrap>
  );
};

export default TasksColumnsList;
