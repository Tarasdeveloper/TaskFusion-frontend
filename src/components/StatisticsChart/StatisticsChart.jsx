import {
  DailyStatisticLine,
  StatisticLineWrap,
  StatisticWrap,
  Statistics,
  StatisticsChartContainer,
  StatisticsChartSection,
  StatisticsChartSectionWrap,
  StatisticsChartTitle,
  StatisticsWrap,
} from './StatisticsChart.styled';

export const StatisticsChart = () => {
  return (
    <StatisticsChartContainer>
      <StatisticsChartTitle>Tasks</StatisticsChartTitle>
      <StatisticsChartSectionWrap>
        <StatisticsChartSection>
          <p>100</p>
          <div />
        </StatisticsChartSection>
        <StatisticsChartSection>
          <p>80</p>
          <div />
        </StatisticsChartSection>
        <StatisticsChartSection>
          <p>60</p>
          <div />
        </StatisticsChartSection>
        <StatisticsChartSection>
          <p>40</p>
          <div />
        </StatisticsChartSection>
        <StatisticsChartSection>
          <p>20</p>
          <div />
        </StatisticsChartSection>
        <StatisticsChartSection>
          <p>0</p>
          <div />
        </StatisticsChartSection>
        <Statistics>
          <StatisticsWrap>
            <StatisticWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine className="day" />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine className="month" />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>To Do</p>
          </StatisticsWrap>
          <StatisticsWrap>
            <StatisticWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine className="day" />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine className="month" />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>In Progress</p>
          </StatisticsWrap>
          <StatisticsWrap>
            <StatisticWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine className="day" />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine className="month" />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>Done</p>
          </StatisticsWrap>
        </Statistics>
      </StatisticsChartSectionWrap>
    </StatisticsChartContainer>
  );
};
