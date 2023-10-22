import {
  BtnWrap,
  NextBtn,
  PrevBtn,
  ReviewSlide,
  ReviewsTitle,
  ReviewsWrap,
  Svg,
} from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import sprite from '../../assets/sprite.svg';

const ReviewsSlider = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 2,
    },
  };

  const swiperParams = {
    breakpoints: breakpoints,
    modules: [Navigation, Autoplay],
    spaceBetween: 25,
    slidesPerView: 1,
    navigation: {
      nextEl: '.custom-next-button',
      prevEl: '.custom-prev-button',
    },
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  };

  return (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <ReviewSlide>{/* <ReviewSingle /> */}</ReviewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide>2</ReviewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide>3</ReviewSlide>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide>4</ReviewSlide>
        </SwiperSlide>
        <BtnWrap>
          <NextBtn className="custom-next-button">
            <Svg>
              <use href={`${sprite}#left-arrow`}></use>
            </Svg>
          </NextBtn>
          <PrevBtn className="custom-prev-button">
            <Svg>
              <use href={`${sprite}#right-arrow`}></use>
            </Svg>
          </PrevBtn>
        </BtnWrap>
      </Swiper>
    </ReviewsWrap>
  );
};

export default ReviewsSlider;
