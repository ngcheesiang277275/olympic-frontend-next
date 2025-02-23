import { CustomPieChart } from "@/components/charts/CustomPieChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { LineChartCard } from "@/components/charts/LineChart";
import { StackedBarChart } from "@/components/charts/StackedBarChart";
import { StackedChart } from "@/components/charts/StackedChart";
import {
  areaConfigs,
  browserConfig,
  browserData,
  donutBrowserConfig,
  donutBrowserData,
  medalChartConfig,
  visitorConfig,
  visitorData,
} from "../../constants/chart-dummy-data.constant";

export default async function Dashboard() {
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const [medalRankingResponse, medalComparisonResponse] = await Promise.all([
      fetch("http://127.0.0.1:8000/medal-ranking"),
      fetch("http://127.0.0.1:8000/medal-comparison?country=Australia"),
    ]);

    const medalRankingData = await medalRankingResponse.json();
    const medalComparisonData = await medalComparisonResponse.json();

    return {
      medalRankingData,
      medalComparisonData,
    };
  }

  const data = await getData();
  console.log(data);

  return (
    <div className="parent-grid">
      <div className="child-grid">
        <StackedBarChart
          title="Medal Ranking"
          description={`Year ${data.medalRankingData.filters.years[0]} - ${
            data.medalRankingData.filters.years[
              data.medalRankingData.filters.years.length - 1
            ]
          }`}
          data={data.medalRankingData.data}
          config={medalChartConfig}
          trendDescription={`${data.medalRankingData.data[0].xAxis} having the most medals`}
          totalDescription={`with total of ${
            data.medalRankingData.data[0].gold +
            data.medalRankingData.data[0].silver +
            data.medalRankingData.data[0].bronze
          } medals`}
        />

        <LineChartCard
          title="Medal Trends Over Time"
          description="Tracking medal counts over different years"
          data={data.medalComparisonData.chart_data}
          config={medalChartConfig}
          trendingDescription={""}
          totalDescription={""}
        />
      </div>

      <StackedChart
        title="Visitor Statistics"
        description="Showing total visitors for the last 6 months"
        data={visitorData}
        // data={data.visitorData}
        config={visitorConfig}
        areas={areaConfigs}
        trend={{
          value: 5.2,
          isUp: true,
          text: "Trending up by 5.2% this month",
        }}
        dateRange="January - June 2024"
        margin={{ left: 12, right: 12 }}
      />

      <div className="child-grid">
        <CustomPieChart
          title="Browser Usage"
          description="January - June 2024"
          data={browserData}
          // data={data.browserData}
          config={browserConfig}
          trend={{
            value: 5.2,
            isUp: true,
            text: "Trending up by 5.2% this month",
          }}
        />

        <DonutChart
          title="Browser Usage"
          description="January - June 2024"
          data={donutBrowserData}
          // data={data.donutBrowserData}
          config={donutBrowserConfig}
          trend={{
            value: 5.2,
            isUp: true,
            text: "Trending up by 5.2% this month",
          }}
          centerLabel={{
            value: "1,125",
            subtitle: "Visitors",
          }}
          innerRadius={60}
          strokeWidth={5}
        />
      </div>
    </div>
  );
}
