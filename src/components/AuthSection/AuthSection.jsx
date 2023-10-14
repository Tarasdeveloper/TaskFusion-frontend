import goose from '../../assets/img/mainPageImg/goose-desk.png';
import { faLogIn } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <SignLink>Sign up </SignLink>
        <LogLink>
          Log in{' '}
          <FontAwesomeIcon
            // icon="fa-regular fa-arrow-right-to-bracket"
            icon={faLogIn}
            style={{ color: '#3e85f3' }}
          />
        </LogLink>
      </LinkWrap>
    </Container>
  );
};

export default AuthSection;
