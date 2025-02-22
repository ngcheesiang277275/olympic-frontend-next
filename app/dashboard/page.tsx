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
} from "../constants/chartDummyData";

export default function Dashboard() {
  return (
    <div className="max-width padding grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <VerticalBarChart
          title="Monthly Desktop Usage"
          description="January - June 2024"
          data={monthlyData}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomPieChart
          title="Browser Usage"
          description="January - June 2024"
          data={browserData}
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
