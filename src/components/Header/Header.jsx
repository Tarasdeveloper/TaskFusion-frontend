import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import gooseMentor from '../../assets/img/header/gooseMentor.svg';
import { selectIsLoading } from '../../redux/reviews/selectors';
import { getReviewById } from '../../redux/reviews/operations';
import { selectUser } from '../../redux/auth/selectors';
import AddFeedbackModal from '../FeedbackModal/AddFeedbackModal';
import UserInfo from './UserInfo';
import {
  Wrapper,
  Info,
  SectionTitle,
  Toggler,
  GooseMentor,
  MotivationTask,
  Span,
  AddFeedbackBtn,
} from './Header.styled';

const Header = ({ onToggle }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [showModal, setShowModal] = useState(false);

  const { pathname } = useLocation();
  const currentPath = pathname;
  const isCalendarPage = currentPath.startsWith('/calendar/day');

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar')) {
    title = 'Calendar';
  } else if (currentPath.startsWith('/statistics')) {
    title = 'Statistics';
  } else {
    title = '';
  }

  const openModal = () => {
    dispatch(getReviewById(user.id));

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        {isCalendarPage && (
          <GooseMentor
            src={`${gooseMentor}`}
            alt="goose"
            media="(min-width: 1440px)"
          />
        )}
        <div>
          <SectionTitle>{title}</SectionTitle>

          {isCalendarPage && (
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 12H21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Toggler>
        <Info>
          <AddFeedbackBtn type="button" onClick={openModal}>
            Feedback
          </AddFeedbackBtn>
          <ThemeToggler />
          <UserInfo />
        </Info>
      </Wrapper>
      {showModal && !isLoading && <AddFeedbackModal onClose={closeModal} />}
    </>
  );
};

export default Header;
