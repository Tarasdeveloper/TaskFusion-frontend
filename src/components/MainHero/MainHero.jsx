import { Link } from 'react-router-dom';
import goose from '../../assets/img/mainPageImg/goose-desk.png';
import { Container, MainTitle } from './MainHero.styled';

const MainHero = () => {
  return (
    <Container>
      <img src={goose} alt="goose" />
      <MainTitle>GooseTrack</MainTitle>
      <Link>Sign up </Link>
      <Link>Log in </Link>
    </Container>
  );
};

export default MainHero;
