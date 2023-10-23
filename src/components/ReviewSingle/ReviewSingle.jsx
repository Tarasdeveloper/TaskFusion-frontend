import {
  HeadWrap,
  ReviewImg,
  ReviewName,
  ReviewSlide,
  ReviewText,
  SingleHeader,
  StarzWrap,
  Svg,
} from './ReviewSingle.styled';
import sprite from '../../assets/sprite.svg';

const ReviewSingle = ({ owner, comment, rating }) => {
  function generationStars(star) {
    const startList = [];

    for (let i = 0; i <= 5 - 1; i += 1) {
      if (star > i) {
        startList.push(
          <Svg key={i}>
            <use href={`${sprite}#icon-starActive`}></use>
          </Svg>,
        );
      } else {
        startList.push(
          <Svg key={i}>
            <use href={`${sprite}#icon-starDeactive`}></use>
          </Svg>,
        );
      }
    }
    return startList;
  }

  return (
    <ReviewSlide>
      <SingleHeader>
        <ReviewImg src={owner.avatarUrl} alt={owner.name} />

        <HeadWrap>
          <ReviewName>{owner.name}</ReviewName>
          <StarzWrap>{generationStars(rating)}</StarzWrap>
        </HeadWrap>
      </SingleHeader>
      <ReviewText>{comment}</ReviewText>
    </ReviewSlide>
  );
};

export default ReviewSingle;
