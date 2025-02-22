import { CustomPieChart } from "@/components/charts/CustomPieChart";
import { DonutChart } from "@/components/charts/DonutChart";
import { HorizontalBarChart } from "@/components/charts/HorizontalBarChart";
import { StackedChart } from "@/components/charts/StackedChart";
import { VerticalBarChart } from "@/components/charts/VerticalBarChart";
import {
  areaConfigs,
  barConfig,
  browserConfig,
  browserData,
  desktopConfig,
  donutBrowserConfig,
  donutBrowserData,
  monthlyData,
  visitorConfig,
  visitorData,
} from "../../constants/chart-dummy-data.constant";

export default async function Dashboard() {
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const [
      medalRankingResponse,
      modelRankingResponse,
    ] = await Promise.all([
      fetch("http://127.0.0.1:8000/medal-ranking"),
      fetch("http://127.0.0.1:8000/medal-ranking"),
    ]);

    const medalRankingData = await medalRankingResponse.json();
    const modelRankingData = await modelRankingResponse.json();

    return {
      medalRankingData,
      modelRankingData,
    };
  }

  const data = await getData();
  console.log(data);

  return (
    <div className="parent-grid">
      <div className="child-grid">
        <VerticalBarChart
          title="Monthly Desktop Usage"
          description="January - June 2024"
          data={monthlyData}
          // data={data.monthlyData}
          config={desktopConfig}
          bar={barConfig}
          trend={{
            value: 5.2,
            isUp: true,
            text: "Trending up by 5.2% this month",
          }}
          margin={{ bottom: 10 }}
        />

        <HorizontalBarChart
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
          margin={{ left: 16 }}
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
