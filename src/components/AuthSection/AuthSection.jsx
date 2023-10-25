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
      <img
        srcSet={`${gooseMob} 142w, ${gooseMobX2} 2x 142w, ${gooseDt} 150w,${gooseDtX2} 2x 142w`}
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
