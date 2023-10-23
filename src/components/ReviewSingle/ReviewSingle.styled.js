import styled from 'styled-components';

export const ReviewSlide = styled.div`
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  height: 200px;
`;

export const SingleHeader = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
`;

export const ReviewImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ReviewName = styled.p`
  display: block;
`;

export const HeadWrap = styled.div`
  display: block;
`;

export const StarzWrap = styled.div`
  display: block;
`;

export const Svg = styled.svg`
  /* width: clamp(50px, 9vw, 61px); */
  width: 10px;
  height: 10px;
`;

export const ReviewText = styled.p`
  color: rgba(17, 17, 17, 0.7);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28; /* 128.571% */
`;
