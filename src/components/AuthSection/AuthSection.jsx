import gooseDt from '../../assets/img/mainPageImg/goose-desk.png';
import gooseMob from '../../assets/img/mainPageImg/goose-mob.png';
import sprite from '../../assets/sprite.svg';
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
      <img
        srcSet={`${gooseMob} 142w, ${gooseDt} 150w,`}
        sizes="(min-width: 480px) 150px, 142px"
        src={gooseMob}
        alt="goose"
      />
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
