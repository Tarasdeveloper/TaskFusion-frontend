import AuthSection from '../../components/AuthSection/AuthSection';
import Description from '../../components/Description/Description';
import ReviewsSlider from '../../components/ReviewsSlider/ReviewsSlider';
import { Container } from './MainPage.styled';

const MainPage = () => {
  return (
    <Container>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </Container>
  );
};

export default MainPage;
