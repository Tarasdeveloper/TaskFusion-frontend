import { useEffect, useState } from 'react';
import * as dateFns from 'date-fns';

import Toolbar from '../../pages/Calendar/NavBar/Toolbar';
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

export const StatisticsPage = () => {
  const authenticated = useSelector(selectAuthenticationStatus);
  const tasks = useSelector(selectTasks);
  console.log('tasks: ', tasks);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasksByMonth, setTasksByMonth] = useState({
    todoByMonth: 0,
    inprogressByMonth: 0,
    SdoneByMonth: 0,
  });

  // console.log('currentDate: ', dateFns.getMonth(currentDate));
  // console.log('currentDate: ', dateFns.getYear(currentDate));
  // console.log('currentDate: ', dateFns.getDate(currentDate));
  const dispatch = useDispatch();

  const year = dateFns.getYear(currentDate);
  const month = dateFns.getMonth(currentDate) + 1;

  useEffect(() => {
    if (!authenticated) return;
    dispatch(
      getTasksThunk({
        year,
        month,
      }),
    );
  }, [authenticated, dispatch, month, year]);

  useEffect(() => {
    if (tasks.length < 1) return;

    const xxx = async () => {
      const taskCount = await countTasksByCategory(tasks);
      const allTasksByMonth =
        taskCount.done + taskCount.inProgress + taskCount.toDo;
      const todoByMonth = taskCount.toDo / allTasksByMonth;
      const inprogressByMonth = taskCount.inProgress / allTasksByMonth;
      const doneByMonth = taskCount.done / allTasksByMonth;

      const tasksByMonth = {
        todoByMonth,
        inprogressByMonth,
        doneByMonth,
      };
      console.log('tasksByMonth: ', tasksByMonth);
      setTasksByMonth(tasksByMonth);
    };
    xxx();
  }, [tasks]);

  const [selectedDate] = useState(new Date());

  const prevHandler = () => {
    setCurrentDate((prevDate) => dateFns.subMonths(prevDate, 1));
  };
  const nextHandler = () => {
    setCurrentDate((prevDate) => dateFns.addMonths(prevDate, 1));
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
          <Toolbar
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            selectedDate={selectedDate}
            currentDate={currentDate}
          />
        </ToolbarContainer>
        <StatisticsChart tasksByMonth={tasksByMonth} />
      </StatisticsPageContainer>
    </StatisticsPageSection>
  );
};
