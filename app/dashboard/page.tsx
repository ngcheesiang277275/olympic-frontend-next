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
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const [
      monthlyResponse,
      browserResponse,
      visitorResponse,
      donutBrowserResponse,
      pieResponse,
    ] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      // fetch("/api/monthly-data"),
      // fetch("/api/browser-data"),
      // fetch("/api/visitor-data"),
      // fetch("/api/donut-browser-data"),
      // fetch("/api/pie-data"),
    ]);

    const monthlyData = await monthlyResponse.json();
    const browserData = await browserResponse.json();
    const visitorData = await visitorResponse.json();
    const donutBrowserData = await donutBrowserResponse.json();
    const pieData = await pieResponse.json();

    return {
      monthlyData,
      browserData,
      visitorData,
      donutBrowserData,
      pieData,
    };
  }

  const data = await getData();

  return (
    <div className="parent-grid">
      <div className="child-first-grid">
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

        <div className="col-span-2 lg:col-span-1">
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
        </div>
      </div>

      <div className="child-second-grid">
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
