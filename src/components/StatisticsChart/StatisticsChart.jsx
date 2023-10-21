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

export const StatisticsChart = ({ tasksByMonth }) => {
  const toDoByMonth = Math.round(tasksByMonth.todoByMonth * 100);
  const inprogressByMonth = Math.round(tasksByMonth.inprogressByMonth * 100);
  const doneByMonth = Math.round(tasksByMonth.todoByMonth * 100);


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
                <p>{toDoByMonth}%</p>
                <DailyStatisticLine
                  className="month"
                  width={tasksByMonth.todoByMonth}
                />
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
                <p>{inprogressByMonth}%</p>
                <DailyStatisticLine
                  className="month"
                  width={tasksByMonth.inprogressByMonth}
                />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>In Progress</p>
          </StatisticsWrap>
          <StatisticsWrap>
            <StatisticWrap>
              <StatisticLineWrap>
                <p>100%</p>
                <DailyStatisticLine
                  className="day"
                  width={tasksByMonth.doneByMonth}
                />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>{doneByMonth}%</p>
                <DailyStatisticLine className="month" height="80%"/>
              </StatisticLineWrap>
            </StatisticWrap>
            <p>Done</p>
          </StatisticsWrap>
        </Statistics>
      </StatisticsChartSectionWrap>
    </StatisticsChartContainer>
  );
};
