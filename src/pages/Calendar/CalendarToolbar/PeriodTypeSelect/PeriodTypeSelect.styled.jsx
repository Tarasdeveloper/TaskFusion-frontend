import styled, { css } from 'styled-components';

export const TypeSelectBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  border-radius: 8px 0 0 8px;
  cursor: pointer;

  width: 76px;
  height: 34px;

  background: ${({ theme }) => theme.dayMonthSwicher.bgColor};

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29px;

  color: ${({ theme }) => theme.dayMonthSwicher.textColor};
  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.notChangedcolors.hoverBtnColor};
    color: ${({ theme }) => theme.notChangedcolors.textBtnColor};
    box-shadow: none;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.dayMonthSwicher.activeBgColor};
      color: ${({ theme }) => theme.dayMonthSwicher.activeTextColor};
    `}

  @media (min-width: 768px) {
    width: 82px;

    font-size: 16px;
    line-height: 1.12;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  ${TypeSelectBtn} + ${TypeSelectBtn} {
    border-radius: 0 8px 8px 0;
  }
`;
