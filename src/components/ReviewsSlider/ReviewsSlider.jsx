import {
  // Next,
  // Prev,
  ReviewSlide,
  ReviewsTitle,
  ReviewsWrap,
} from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const ReviewsSlider = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 2,
    },
  };

  const swiperParams = {
    breakpoints: breakpoints,
    modules: [Navigation],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {},
    autoplay: { delay: 2000 },
    loop: true,
    // onSlideChange={() => console.log('slide change')},
    // onSwiper={(swiper) => console.log(swiper)}
  };

  return (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper {...swiperParams}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* <Next></Next>
        <Prev></Prev> */}
        <ReviewSlide></ReviewSlide>
      </Swiper>
    </ReviewsWrap>
  );
};

export default ReviewsSlider;
