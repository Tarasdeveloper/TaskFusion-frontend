import sprite from '../../assets/sprite.svg';
import gooseDt from '../../assets/img/mainPageImg/goose-desk.png';
import gooseDtX2 from '../../assets/img/mainPageImg/goose-desk-x2.png';
import gooseMob from '../../assets/img/mainPageImg/goose-mob.png';
import gooseMobX2 from '../../assets/img/mainPageImg/goose-mob-x2.png';
import {
  Container,
  LinkWrap,
  LogLink,
  MainTitle,
  Ospan,
  SignLink,
  Svg,
} from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Container>
      <picture>
        <source
          srcSet={`${gooseDt} 1x, ${gooseDtX2} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${gooseMob} 1x, ${gooseMobX2} 2x`}
          media="(min-width: 320px)"
        />
        <img src={gooseMob} alt="goose" />
      </picture>

      <MainTitle>
        G<Ospan>oo</Ospan>seTrack
      </MainTitle>

      <LinkWrap>
        <SignLink to="/register">Sign up</SignLink>
        <LogLink to="/login">
          Log in{' '}
          <Svg>
            <use href={`${sprite}#login`}></use>
          </Svg>
        </LogLink>
      </LinkWrap>
    </Container>
  );
};

export default AuthSection;
