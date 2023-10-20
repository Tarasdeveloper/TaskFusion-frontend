import { ReviewSlide, ReviewsTitle, ReviewsWrap } from './ReviewsSlider.styled';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewsSlider = () => {
  return (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <ReviewSlide>slider</ReviewSlide>
    </ReviewsWrap>
  );
};

export default ReviewsSlider;
