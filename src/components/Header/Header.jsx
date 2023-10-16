import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gooseMentor1x, gooseMentor2x } from '../../images/Header';
import sprite from '../../images/Header/sprite.svg';
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
  const tasks = useSelector((state) => state.tasks);

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
            src={`${gooseMentor1x} 1x, ${gooseMentor2x} 2x`}
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
          <use href={`${sprite}#icon-menu`} />
        </Toggler>
        <Info></Info>
      </Wrapper>
    </>
  );
};
// add on 70 line перемикач світла, user info and feedback form

export default Header;
