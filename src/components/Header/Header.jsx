import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import gooseMentor from '../../images/header/gooseMentor.svg';
import sprite from '../../images/header/sprite.svg';
import { selectTasks } from '../../redux/tasks/selectors';
import {
  Wrapper,
  Info,
  SectionTitle,
  Toggler,
  GooseMentor,
  MotivationTask,
  Span,
} from './Header.styled';

const Header = ({ onToggle }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { currentDay } = useParams();
  const calendarPage = currentPath.startsWith('/calendar/day');
  const tasks = useSelector(selectTasks);

  const tasksForToday = () => {
    const tasksToday = tasks.filter((task) => task.date === currentDay);
    if (tasksToday.length > 0) {
      const tasksInProgress = tasksToday[0].tasks.find(
        (task) => task.category === 'to-do' || task.category === 'in-progress',
      );
      return tasksInProgress;
    }
  };

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Account';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
  }

  return (
    <>
      <Wrapper>
        {calendarPage && tasksForToday() && (
          <GooseMentor
            src={`${gooseMentor}`}
            alt="goose"
            media="(min-width: 1440px)"
          />
        )}
        <div>
          <SectionTitle>{title}</SectionTitle>

          {calendarPage && tasksForToday() && (
            <MotivationTask>
              <Span>Let go</Span> of the past and focus on the present!
            </MotivationTask>
          )}
        </div>
        <Toggler
          type="button"
          onClick={() => {
            onToggle();
          }}
        >
          <svg>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </Toggler>
        <Info>
          <ThemeToggler />
        </Info>
      </Wrapper>
    </>
  );
};
// add on 70 line перемикач світла, user info and feedback form

export default Header;
