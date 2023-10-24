import {
  BtnWrap,
  HeadWrap,
  ImgWrap,
  NextBtn,
  PrevBtn,
  ReviewImg,
  ReviewName,
  ReviewSlide,
  ReviewText,
  ReviewsTitle,
  ReviewsWrap,
  SingleHeader,
  SlideWrap,
  StarzWrap,
  Svg,
} from './ReviewsSlider.styled';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import sprite from '../../assets/sprite.svg';
import { Loader } from '../Loader/Loader';
import SvgRatingStar from '../SvgRatingStar/SvgRatingStar';
import { getReviews } from '../../redux/reviews/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectReviews } from '../../redux/reviews/selectors';

const ReviewsSlider = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const page = 1;
    const limit = 2;
    dispatch(getReviews({ page, limit }));
  }, [dispatch]);

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

  return isLoading ? (
    <Loader />
  ) : (
    <ReviewsWrap>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <Swiper {...swiperParams}>
        {Array.isArray(reviews) &&
          reviews?.map((review) => {
            const { _id, rating, owner } = review;

            const avatar = owner?.avatar;
            const name = owner?.name;

            return (
              <SwiperSlide key={_id}>
                <ReviewSlide>
                  <SlideWrap>
                    <ImgWrap>
                      <ReviewImg src={avatar} alt={name} />
                    </ImgWrap>
                    <SingleHeader>
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
                      <ReviewText>
                        {review.review.length > 150
                          ? `${review.review.slice(0, 150)}...`
                          : review.review}
                      </ReviewText>
                    </SingleHeader>
                  </SlideWrap>
                </ReviewSlide>
              </SwiperSlide>
            );
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
