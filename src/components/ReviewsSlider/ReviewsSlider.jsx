import { ReviewSlide, ReviewsTitle, ReviewsWrap } from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

const ReviewsSlider = () => {
  return (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>

        <ReviewSlide></ReviewSlide>
      </Swiper>
    </ReviewsWrap>
  );
};

export default ReviewsSlider;
