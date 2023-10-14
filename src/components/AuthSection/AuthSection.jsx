import goose from '../../assets/img/mainPageImg/goose-desk.png';
// import { faArrowRightToBracket } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  LinkWrap,
  LogLink,
  MainTitle,
  Ospan,
  SignLink,
} from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Container>
      <img src={goose} alt="goose" />
      <MainTitle>
        G<Ospan>oo</Ospan>seTrack
      </MainTitle>
      <LinkWrap>
        <SignLink>Sign up</SignLink>
        <LogLink>
          Log in{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M11.75 2.75H12.65C13.9101 2.75 14.5402 2.75 15.0215 2.99524C15.4448 3.21095 15.789 3.55516 16.0048 3.97852C16.25 4.45982 16.25 5.08988 16.25 6.35V12.65C16.25 13.9101 16.25 14.5402 16.0048 15.0215C15.789 15.4448 15.4448 15.789 15.0215 16.0048C14.5402 16.25 13.9101 16.25 12.65 16.25H11.75M8 5.75L11.75 9.5M11.75 9.5L8 13.25M11.75 9.5L2.75 9.5"
              stroke="#3E85F3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </LogLink>
      </LinkWrap>
    </Container>
  );
};

export default AuthSection;
