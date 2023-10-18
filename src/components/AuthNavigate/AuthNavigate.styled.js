import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  color: #3e85f3;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px; /* 116.667% */
  text-decoration-line: underline;

  transition: color 0.1s;

  &:hover {
    color: #21222c;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px; /* 133.333% */
  }
`;
