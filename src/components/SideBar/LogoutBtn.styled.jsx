import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 131px;
  padding: 14px 28px;
  border: none;
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  transition: background-color #3e85f3;

  @media screen and (min-width: 768px) {
    gap: 11px;
    min-width: 141px;
    padding: 16px 23px;
  }

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;
export const Text = styled.p`
  color: #ffffff;
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;
export const SVG = styled.svg`
width: 18px;
  height: 18px;
  fill: FFFFFF;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
`;
