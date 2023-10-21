import styled from 'styled-components';

export const ReviewsWrap = styled.div`
  max-width: 1186px;
  margin: 0 auto;
  padding: 64px 20px;

  /* @media screen and (min-width: 1024px) {
    max-width: 1110px;
  } */
`;

export const ReviewsTitle = styled.h2`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  line-height: 1.14;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
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
  padding: 24px 20px 24px 24px;
  width: 100%;
  height: 200px;
`;
