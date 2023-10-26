import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;
export const UserName = styled.p`
  text-align: center;
  display: flex;
  width: 60px;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  margin-right: 14px;
  margin-left: 14px;
  color: var(--secondary-text-color);

  transition: var(--transition-changetheme-color);

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
    width: 80px;
  }
`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border: 1.8px solid #3e85f3;
  border-radius: 50%;

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const UserIcon = styled.svg`
  width: 44px;
  height: 44px;
  fill: var(--primary-text-color);
  fill-opacity: 0.5;
`;
