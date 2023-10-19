import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  width: 76px;
  height: 34px;

  background: ${({ theme }) => theme.dayMonthSwicher.bgColor};

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29px;

  color: ${({ theme }) => theme.dayMonthSwicher.textColor};

  &.active {
    background: ${({ theme }) => theme.dayMonthSwicher.activeBgColor};
    color: ${({ theme }) => theme.dayMonthSwicher.activeTextColor};
    &:hover,
    :focus {
      background-color: ${({ theme }) => theme.notChangedcolors.hoverBtnColor};
      color: ${({ theme }) => theme.notChangedcolors.textBtnColor};
      box-shadow: none;
    }
  }
  @media (min-width: 768px) {
    width: 82px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

export const StyledLinkMonth = styled(StyledLink)`
  padding: 8px 16px;

  border: none;
  border-right: ${({ theme }) => theme.dayMonthSwicher.borderColor};
  border-radius: 8px 0px 0px 8px;

  transition: background-color ${({ theme }) => theme.animation},
    box-shadow ${({ theme }) => theme.animation};

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.notChangedcolors.hoverBtnColor};
    color: ${({ theme }) => theme.notChangedcolors.textBtnColor};
    box-shadow: -4px 2px 16px rgba(136, 165, 191, 1);
  }
`;

export const LinkActiveMonth = styled(StyledLinkMonth)`
  background: ${({ theme }) => theme.dayMonthSwicher.activeBgColor};
  color: ${({ theme }) => theme.dayMonthSwicher.activeTextColor};
`;

export const StyledLinkDay = styled(StyledLink)`
  padding: 8px 25px;
  border: none;
  border-radius: 0px 8px 8px 0px;

  transition: background-color ${({ theme }) => theme.animation},
    box-shadow ${({ theme }) => theme.animation};

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.notChangedcolors.hoverBtnColor};
    color: ${({ theme }) => theme.notChangedcolors.textBtnColor};
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }
  @media (min-width: 768px) {
    padding: 8px 26px;
  }
`;

export const LinkActiveDay = styled(StyledLinkDay)`
  background: ${({ theme }) => theme.dayMonthSwicher.activeBgColor};
  color: ${({ theme }) => theme.dayMonthSwicher.activeTextColor};
`;
