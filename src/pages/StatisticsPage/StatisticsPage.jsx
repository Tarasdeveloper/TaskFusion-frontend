import { useEffect, useState } from 'react';
import * as dateFns from 'date-fns';

import {
  StatisticsPageContainer,
  StatisticsPageSection,
  ToolbarContainer,
} from './StatisticsPage.styled';
import { StatisticsChart } from '../../components/StatisticsChart/StatisticsChart';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksThunk } from '../../redux/tasks/operations';
import { selectAuthenticationStatus } from '../../redux/auth/selectors';
import { selectTasks } from '../../redux/tasks/selectors';
import StatisticsToolbar from '../../components/StatisticsToolbar/StatisticsToolbar';

export const StatisticsPage = () => {

  const authenticated = useSelector(selectAuthenticationStatus);
  const tasks = useSelector(selectTasks);

  const [currentDate, setCurrentDate] = useState(new Date());

  const [tasksByMonth, setTasksByMonth] = useState({
    todoByMonth: 0,
    inprogressByMonth: 0,
    SdoneByMonth: 0,
  });
  const [tasksByDay, setTasksByDay] = useState({
    todoByDay: 0,
    inprogressByDay: 0,
    SdoneByDay: 0,
  });

  const dispatch = useDispatch();

  const year = dateFns.getYear(currentDate);
  const month = dateFns.getMonth(currentDate) + 1;
  const day = dateFns.getDate(currentDate);

  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    if (!authenticated) return;
    dispatch(
      getTasksThunk(
        dateFns.formatISO(currentDate, {
          representation: 'date',
        }),
      ),
    );
  }, [authenticated, currentDate, dispatch]);

  useEffect(() => {
    const getRequestedTasks = async () => {
      const filteredTasks = tasks.filter((task) => task.date === formattedDate);

      const taskCount = await countTasksByCategory(tasks);
      const dailyTasksCount = await countTasksByCategory(filteredTasks);

      const allTasksByMonth =
        taskCount.done + taskCount.inProgress + taskCount.toDo;
      const todoByMonth = taskCount.toDo / allTasksByMonth || 0;
      const inprogressByMonth = taskCount.inProgress / allTasksByMonth || 0;
      const doneByMonth = taskCount.done / allTasksByMonth || 0;

      const allTasksByDay =
        dailyTasksCount.done +
        dailyTasksCount.inProgress +
        dailyTasksCount.toDo;
      const todoByDay = dailyTasksCount.toDo / allTasksByDay || 0;
      const inprogressByDay = dailyTasksCount.inProgress / allTasksByDay || 0;
      const doneByDay = dailyTasksCount.done / allTasksByDay || 0;

      const tasksByMonth = {
        todoByMonth,
        inprogressByMonth,
        doneByMonth,
      };

      const tasksByDay = {
        todoByDay,
        inprogressByDay,
        doneByDay,
      };

      setTasksByMonth(tasksByMonth);
      setTasksByDay(tasksByDay);
    };

    getRequestedTasks();
  }, [formattedDate, tasks]);

  const prevHandler = () => {
    setCurrentDate((prevDate) => dateFns.subDays(prevDate, 1));
  };
  const nextHandler = () => {
    setCurrentDate((prevDate) => dateFns.addDays(prevDate, 1));
  };

  function countTasksByCategory(taskList) {
    const count = {
      done: 0,
      toDo: 0,
      inProgress: 0,
    };

    taskList.forEach((task) => {
      switch (task.category) {
        case 'done':
          count['done']++;
          break;
        case 'to-do':
          count['toDo']++;
          break;
        case 'in-progress':
          count['inProgress']++;
          break;
      }
    });

    return count;
  }

  return (
    <StatisticsPageSection>
      <StatisticsPageContainer>
        <ToolbarContainer>
          <StatisticsToolbar
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        </ToolbarContainer>
        <StatisticsChart tasksByMonth={tasksByMonth} tasksByDay={tasksByDay} />
      </StatisticsPageContainer>
    </StatisticsPageSection>
  );
};
