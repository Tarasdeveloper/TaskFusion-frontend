import {
  NextBtn,
  PrevBtn,
  ReviewSlide,
  ReviewsTitle,
  ReviewsWrap,
} from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const ReviewsSlider = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 2,
    },
  };

  const swiperParams = {
    breakpoints: breakpoints,
    modules: [Navigation, Autoplay],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: '.custom-next-button',
      prevEl: '.custom-prev-button',
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    loop: true,
  };

  return (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper {...swiperParams}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <ReviewSlide></ReviewSlide>
        <NextBtn className="custom-next-button">Назад</NextBtn>
        <PrevBtn className="custom-prev-button">Вперед</PrevBtn>
      </Swiper>
    </ReviewsWrap>
  );
};

export default ReviewsSlider;
