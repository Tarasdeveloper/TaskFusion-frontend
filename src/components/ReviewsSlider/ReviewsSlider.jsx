import {
  BtnWrap,
  NextBtn,
  PrevBtn,
  ReviewsTitle,
  ReviewsWrap,
  Svg,
} from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import ReviewSingle from '../ReviewSingle/ReviewSingle';

const ReviewsSlider = () => {
  const [, setSlides] = useState([]);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к базе данных и получить данные о слайдах
    // Ниже приведен пример симуляции получения данных

    const fetchDataFromDatabase = async () => {
      try {
        // Здесь выполните запрос к базе данных
        // Например, используйте fetch или axios

        // Симуляция получения данных
        const response = await fetch('/api/getSlides');
        if (response.ok) {
          const data = await response.json();
          setSlides(data); // Установите данные в состояние slides
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchDataFromDatabase();
  }, []);

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
        {slides.map((slide, index) => (
        <SwiperSlide>
          <ReviewSingle />
        </SwiperSlide>

        ))}
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
