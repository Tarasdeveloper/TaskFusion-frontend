import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import gooseMentor from '../../assets/img/header/gooseMentor.svg';
import sprite from '../../assets/sprite.svg';
import { selectTasks } from '../../redux/tasks/selectors';
import { selectIsLoading } from '../../redux/reviews/selectors';
import { fetchReviewById } from '../../redux/reviews/operations';
import { FeedbackModal } from '../../components/FeedbackModal/FeedbackModal';
import {
  Wrapper,
  Info,
  SectionTitle,
  Toggler,
  GooseMentor,
  MotivationTask,
  Span,
  FeedbackButton,
} from './Header.styled';

const Header = ({ onToggle }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const isLoading = useSelector(selectIsLoading);
  const [showModal, setShowModal] = useState(false);

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

  const openModal = () => {
    dispatch(fetchReviewById(user.id));

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
          <FeedbackButton type="button" onClick={openModal}>
            Feedback
          </FeedbackButton>
          <ThemeToggler />
        </Info>
        {showModal && !isLoading && <FeedbackModal onClose={closeModal} />}
      </Wrapper>
    </>
  );
};
// add on 70 line перемикач світла, user info and feedback form

export default Header;
