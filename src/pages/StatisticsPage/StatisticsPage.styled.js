import { styled } from 'styled-components';

export const StatisticsPageSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const StatisticsPageContainer = styled.div`
  background-color: white;
  width: 335px;
  height: 684px;
  padding-top: 28px;
  padding-left: 14px;
  padding-right: 14px;
  @media (min-width: 768px) {
    width: 704px;
    height: 854px;
    padding-top: 132px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    width: 1087px;
    height: 752px;
    padding-top: 134px;
    padding-left: 114px;
    padding-right: 113px;
  }
`;
