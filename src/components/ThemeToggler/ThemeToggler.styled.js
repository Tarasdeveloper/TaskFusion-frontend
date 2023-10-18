import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const AnimatedIcon = styled.svg`
  width: 32px;
  height: 32px;
  &.animate {
    animation: ${appear} 0.5s ease forwards;
  }

  @media (max-width: 375px) {
    width: 24px;
    height: 24px;
  }
`;

export const DisappearingIcon = styled(AnimatedIcon)`
  &.animate {
    animation: ${appear} 0.5s ease forwards;
  }
`;
