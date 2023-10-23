import {
  BtnWrap,
  HeadWrap,
  NextBtn,
  PrevBtn,
  ReviewImg,
  ReviewName,
  ReviewSlide,
  ReviewText,
  ReviewsTitle,
  ReviewsWrap,
  SingleHeader,
  StarzWrap,
  Svg,
} from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import sprite from '../../assets/sprite.svg';
import { Loader } from '../Loader/Loader';
import SvgRatingStar from '../ReviewSingle/ReviewSingle';
import { getReviews } from '../../redux/reviews/operations';

const ReviewsSlider = () => {
  const { data: { reviews } = [], isLoading } = getReviews();

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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return isLoading ? (
    <Loader />
  ) : (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper {...swiperParams}>
        {Array.isArray(reviews) &&
          reviews?.map((review) => {
            const {
              _id,
              rating,
              comment,
              owner: { avatarUrl, name },
            } = review;
            <SwiperSlide key={_id}>
              <ReviewSlide>
                <SingleHeader>
                  <ReviewImg src={avatarUrl} alt={name} />

                  <HeadWrap>
                    <ReviewName>{name}</ReviewName>
                    <StarzWrap>
                      {Array.from({ length: 5 }, (_, index) => (
                        <SvgRatingStar
                          key={index}
                          width={14}
                          height={14}
                          fill={index < rating ? '#FFAC33' : '#CEC9C1'}
                          color={index < rating ? '#FFAC33' : '#CEC9C1'}
                        />
                      ))}
                    </StarzWrap>
                  </HeadWrap>
                </SingleHeader>
                <ReviewText>
                  {comment.length > 150
                    ? `${comment.slice(0, 150)}...`
                    : comment}
                </ReviewText>
              </ReviewSlide>
            </SwiperSlide>;
          })}

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
