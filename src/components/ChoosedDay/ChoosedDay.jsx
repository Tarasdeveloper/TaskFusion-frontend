import { Wrap } from './ChoosedDay.styled';
import { DayCalendarHead } from '../../components/DayCalendarHead/DayCalendarHead';
import  TasksColumnsList  from '../../components/TasksColumnsList/TasksColumnsList';

export const ChoosedDay = () => {
  return (
    <Wrap>
      <DayCalendarHead />
      <TasksColumnsList />
    </Wrap>
  );
};
