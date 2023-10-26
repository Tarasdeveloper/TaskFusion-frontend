import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const CurrentLink = styled(NavLink)`
  color: var(--sidebar-text-color);
  width: 185px;

  font-weight: 600;
  font-size: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  & > svg {
    fill: transparent;
    stroke: var(--sidebar-text-color);
  }
  &.active {
    color: var(--sidebar-focus-text-color);
    background-color: var(--sidebar-background-color);
    & > svg {
      stroke: var(--sidebar-focus-text-color);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
    width: 225px;
  }

  @media screen and (min-width: 1440px) {
    width: 241px;
  }
`;

export const Icon = styled.svg`
  fill: transparent;
  stroke: #34343480;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;
