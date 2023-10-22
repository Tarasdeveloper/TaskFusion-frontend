import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 278px;
  }
`;

export const PeriodWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 192px;
  height: 30px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.notChangedcolors.accentColor};
  color: ${({ theme }) => theme.notChangedcolors.textBtnColor};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  text-transform: uppercase;
  @media (min-width: 768px) {
    height: 34px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
export const NavButton = styled.button`
  border-radius: 8px 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  cursor: pointer;
  width: 36px;
  height: 30px;

  background: ${({ theme }) => theme.bgColors.page};
  opacity: ${props => {
    if (props.disabled) {
      return '0.3';
    }
    return '1';
  }};
  &.active {
    &:hover,
    :focus {
      box-shadow: none;
    }
  }

  @media (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;
export const WrapperButton = styled.div`
  display: flex;
  ${NavButton} + ${NavButton} {
    border-radius: 0 8px 8px 0;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.textColors.modalText};
  fill: transparent;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
