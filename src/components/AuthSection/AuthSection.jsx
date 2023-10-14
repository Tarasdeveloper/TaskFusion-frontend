import { Link, NavLink } from 'react-router-dom';
import goose from '../../assets/img/mainPageImg/goose-desk.png';
import { Container, MainTitle, Ospan } from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Container>
      <img src={goose} alt="goose" />
      <MainTitle>
        G<Ospan>oo</Ospan>seTrack
      </MainTitle>
      <div>
        <NavLink>Sign up </NavLink>
        <Link>Log in </Link>
      </div>
    </Container>
  );
};

export default AuthSection;
