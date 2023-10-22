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

export const StatisticsChart = ({ tasksByMonth, tasksByDay }) => {
  const toDoByMonth = Math.round(tasksByMonth.todoByMonth * 100);
  const inProgressByMonth = Math.round(tasksByMonth.inprogressByMonth * 100);
  const doneByMonth = Math.round(tasksByMonth.doneByMonth * 100);

  const todoByDay = Math.round(tasksByDay.todoByDay * 100);
  const inprogressByDay = Math.round(tasksByDay.inprogressByDay * 100);
  const doneByDay = Math.round(tasksByDay.doneByDay * 100);

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
                <p>{todoByDay}%</p>
                <DailyStatisticLine
                  className="day"
                  style={{ height: `${todoByDay}%` }}
                />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>{toDoByMonth}%</p>
                <DailyStatisticLine
                  className="month"
                  style={{ height: `${toDoByMonth}%` }}
                />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>To Do</p>
          </StatisticsWrap>
          <StatisticsWrap>
            <StatisticWrap>
              <StatisticLineWrap>
                <p>{inprogressByDay}%</p>
                <DailyStatisticLine
                  className="day"
                  style={{ height: `${inprogressByDay}%` }}
                />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>{inProgressByMonth}%</p>
                <DailyStatisticLine
                  className="month"
                  style={{ height: `${inProgressByMonth}%` }}
                />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>In Progress</p>
          </StatisticsWrap>
          <StatisticsWrap>
            <StatisticWrap>
              <StatisticLineWrap>
                <p>{doneByDay}%</p>
                <DailyStatisticLine
                  className="day"
                  style={{ height: `${doneByDay}%` }}
                />
              </StatisticLineWrap>
              <StatisticLineWrap>
                <p>{doneByMonth}%</p>
                <DailyStatisticLine
                  className="month"
                  style={{ height: `${doneByMonth}%` }}
                />
              </StatisticLineWrap>
            </StatisticWrap>
            <p>Done</p>
          </StatisticsWrap>
        </Statistics>
      </StatisticsChartSectionWrap>
    </StatisticsChartContainer>
  );
};
