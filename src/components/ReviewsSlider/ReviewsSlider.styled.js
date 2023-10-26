import styled from 'styled-components';

export const ReviewsWrap = styled.div`
  max-width: 1186px;
  margin: 0 auto;
  padding: 64px 20px;
  max-width: 622px;

  @media screen and (min-width: 1024px) {
    max-width: 1188px;
  }
`;

export const ReviewsTitle = styled.h2`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  line-height: 1.14;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: clamp(40px, 10vw, 50px);
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: clamp(8px, 3vw, 32px);
`;

export const NextBtn = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const PrevBtn = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const Svg = styled.svg`
  width: clamp(50px, 9vw, 61px);
  height: clamp(50px, 9vw, 61px);
`;

export const ReviewSlide = styled.div`
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  padding: 24px;
  max-width: 580px;
  height: 200px;
  cursor: grab;

  @media screen and (min-width: 480px) {
    height: 190px;
  }
`;

export const SlideWrap = styled.div`
  display: flex;
  gap: 18px;
`;

export const SingleHeader = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
`;

export const ReviewImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  flex-shrink: 0;
`;

export const WithoutAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(220, 227, 229, 0.8);
  border: 1.8px solid var(--userprofile-photo-border-color);
  transition: var(--transition-changetheme-background-color);
  flex-shrink: 0;
`;

export const ReviewName = styled.p`
  color: #343434;
  font-size: 18px;
  font-weight: 700;
  line-height: 1; /* 100% */
  margin-bottom: 13px;
`;

export const NameStarz = styled.div`
  display: block;
`;

export const HeadWrap = styled.div`
  display: flex;
  gap: 18px;
`;

export const StarzWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Stars = styled.svg`
  width: 14px;
  height: 14px;
`;

export const ReviewText = styled.p`
  color: rgba(17, 17, 17, 0.7);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media screen and (min-width: 480px) {
    margin-left: 68px;
  }
`;

export const IconUser = styled.svg`
  width: 48px;
  height: 48px;
  fill: var(--btn-background-color);
  fill-opacity: 0.18;
`;
