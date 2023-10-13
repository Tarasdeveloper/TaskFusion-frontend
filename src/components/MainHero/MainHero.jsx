import { Link } from 'react-router-dom';
import goose from '../../assets/img/mainPageImg/goose-desk.png';
import { Container, MainTitle, Ospan } from './MainHero.styled';

const MainHero = () => {
  return (
    <Container>
      <img src={goose} alt="goose" />
      <MainTitle>
        G<Ospan>oo</Ospan>seTrack
      </MainTitle>
      <div>
        <Link>Sign up </Link>
        <Link>Log in </Link>
      </div>
    </Container>
  );
};

export default MainHero;
