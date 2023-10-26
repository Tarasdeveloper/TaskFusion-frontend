import styled from 'styled-components';
import { ReactComponent as Move } from '../../assets/img/arrow-circle-broken-right.svg';

import Popover from '@mui/material/Popover';

export const PopoverStyled = styled(Popover)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TaskDropDownContainer = styled.div`
  display: flex;
  gap: 13px;
  position: relative;

  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  button {
    width: 14px;
    height: 14px;

    justify-content: center;
    align-items: center;
  }
`;

export const MoveBtn = styled(Move)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: #343434;
  transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    stroke: #3e85f3;
    scale: 1.2;
  }
`;

export const ChangeCategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 115px;
  height: 70px;
  border-radius: 8px;
  background-color: #fff;

  gap: 2px;

  color: #343434;
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;

  align-items: center;
  justify-content: center;
  text-align: center;

  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  padding: 8px 10px;

  overflow: visible;

  @media screen and (min-width: 768px) {
    width: 147px;
    height: 90px;

    color: #343434;
    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
    line-height: 18px;

    gap: 7px;

    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MoveToInProgress = styled.div`
  button {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;

    cursor: pointer;

    display: flex;
    width: 120px;
    height: 26px;

    background: none;
    border: none;

    cursor: pointer;

    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition:
      stroke 300ms cubic-bezier(0.4, 0, 0.2, 1),
      color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (max-width: 768px) {
      padding: 0 12px;
    }

    &:hover,
    :focus {
      color: #3e85f3;

      ${MoveBtn} {
        stroke: #3e85f3;
      }
    }

    ${MoveBtn} {
      width: 16px;
      height: 16px;
      stroke: #343434;
      transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const MoveToDone = styled.div`
  button {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;

    cursor: pointer;

    display: flex;
    width: 120px;
    height: 26px;

    background: none;
    border: none;

    cursor: pointer;

    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1)};

    @media screen and (max-width: 768px) {
      padding: 0 12px;
    }

    &:hover,
    :focus {
      color: #3e85f3;

      ${MoveBtn} {
        stroke: #3e85f3;
      }
    }

    ${MoveBtn} {
      width: 16px;
      height: 16px;
      stroke: #343434;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)};
    }
  }
`;
