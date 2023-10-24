import { styled } from 'styled-components';

export const StatisticsChartContainer = styled.div`
  margin-top: 40px;
  width: 307px;
  height: 413px;
  padding: 40px 14px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0.8px solid var(--statistic-border-color);
  transition: var(--transition-changetheme-border-color);
  @media (min-width: 768px) {
    width: 640px;
    height: 440px;
    padding: 40px 32px;
  }
  @media (min-width: 1440px) {
    width: 860px;
    height: 424px;
    padding: 32px;
  }
`;

export const StatisticsChartTitle = styled.p`
  margin-bottom: 20px;
  color: var(--secondary-text-color);

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%; /* 21px */
  transition: var(--transition-changetheme-color);

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
  }
`;

export const StatisticsChartSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    gap: 61px;
  }
  p {
    display: inline-block;
    width: 25px;
    color: var(--secondary-text-color);
    text-align: right;
    font-family: Inter;
    font-size: 14px;
    line-height: 150%; /* 21px */
    transition: var(--transition-changetheme-color);
  }
  div {
    width: 243px;
    height: 1px;
    background-color: var(--statistic-border-color);
    transition: var(--transition-changetheme-background-color);
    @media (min-width: 768px) {
      width: 522px;
    }
    @media (min-width: 1440px) {
      width: 694px;
    }
  }
`;

export const StatisticsChartSectionWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: -25px;
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const DailyStatisticLine = styled.div`
  width: 22px;
  height: 246px;
  &.day {
    background: linear-gradient(0deg, #ffd2dd 0%, rgba(255, 210, 221, 0) 100%);
  }
  &.month {
    background: linear-gradient(0deg, #3e85f3 0%, rgba(62, 133, 243, 0) 100%);
  }
  @media (min-width: 768px) {
    width: 27px;
    height: 265px;
  }
`;

export const StatisticLineWrap = styled.div`
  height: 270px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 22px;
  @media (min-width: 768px) {
    height: 289px;
    width: 27px;
  }
`;

export const StatisticWrap = styled.div`
  display: flex;
  gap: 8px;

  color: var(--secondary-text-color);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  transition: var(--transition-changetheme-color);

  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const Statistics = styled.div`
  position: absolute;
  left: 50px;
  bottom: -25px;
  display: flex;
  gap: 30px;
  @media (min-width: 768px) {
    gap: 127px;
    left: 95px;
  }
  @media (min-width: 1440px) {
    gap: 170px;
    left: 149px;
  }
`;

export const StatisticsWrap = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  color: var(--secondary-text-color);

  font-family: Inter;
  font-size: 12px;
  line-height: 16px; /* 133.333% */

  transition: var(--transition-changetheme-color);

  p {
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    width: 68px;
    font-size: 14px;
  }
`;

export const StatisticsInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const StatisticsInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
