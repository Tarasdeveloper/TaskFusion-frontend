import { styled } from 'styled-components';

export const FullCallendar = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 64px;

  background-color: var(--secondary-background-color);
  transition: var(--transition-changetheme-background-color);
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    padding-top: 32px;
    padding-left: 321px;
    padding-right: 32px;
  }
`;
