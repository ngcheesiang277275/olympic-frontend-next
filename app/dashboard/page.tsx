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
import { StatCardGroup } from "@/components/charts/StatCardGroup";
import { Users, Medal, Trophy, Flag, Calendar } from "lucide-react";

export default async function Dashboard() {
  async function getData() {
    const [
      medalRankingResponse,
      medalComparisonResponse,
      totalAthletesResponse,
      totalOlympicsResponse,
      totalMedalsResponse,
      totalSportsResponse,
      totalCountriesResponse,
    ] = await Promise.all([
      fetch("http://127.0.0.1:8000/medal-ranking"),
      fetch("http://127.0.0.1:8000/medal-comparison?country=Malaysia"),
      fetch("http://127.0.0.1:8000/stats/total-athletes"),
      fetch("http://127.0.0.1:8000/stats/total-olympics"),
      fetch("http://127.0.0.1:8000/stats/total-medals"),
      fetch("http://127.0.0.1:8000/stats/total-sports"),
      fetch("http://127.0.0.1:8000/stats/total-countries"),
    ]);

    const [
      medalRankingData,
      medalComparisonData,
      totalAthletes,
      totalOlympics,
      totalMedals,
      totalSports,
      totalCountries,
    ] = await Promise.all([
      medalRankingResponse.json(),
      medalComparisonResponse.json(),
      totalAthletesResponse.json(),
      totalOlympicsResponse.json(),
      totalMedalsResponse.json(),
      totalSportsResponse.json(),
      totalCountriesResponse.json(),
    ]);

    const statsData = [
      {
        title: "Total Athletes",
        value: totalAthletes.total_athletes,
        icon: <Users className="h-4 w-4 text-muted-foreground" />,
      },
      {
        title: "Total Olympics",
        value: totalOlympics.total_olympics,
        icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
      },
      {
        title: "Total Medals",
        value: totalMedals.total_medals,
        icon: <Medal className="h-4 w-4 text-muted-foreground" />,
      },
      {
        title: "Total Sports",
        value: totalSports.total_sports,
        icon: <Trophy className="h-4 w-4 text-muted-foreground" />,
      },
      {
        title: "Total Countries",
        value: totalCountries.total_countries,
        icon: <Flag className="h-4 w-4 text-muted-foreground" />,
      },
    ];

    return {
      medalRankingData,
      medalComparisonData,
      statsData,
    };
  }

  const data = await getData();
  console.log(data);

  return (
    <div className="parent-grid">
      <StatCardGroup data={data.statsData} />
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
          totalDescription={`Total medals: ${
            data.medalRankingData.data[0].gold +
            data.medalRankingData.data[0].silver +
            data.medalRankingData.data[0].bronze
          }`}
        />

        <LineChartCard
          title={`Medal Trends of ${data.medalComparisonData.country}`}
          description={`Year ${data.medalComparisonData.filters.years[0]} - ${
            data.medalComparisonData.filters.years[
              data.medalComparisonData.filters.years.length - 1
            ]
          }`}
          data={data.medalComparisonData.chart_data}
          config={medalChartConfig}
          trendingDescription={""}
          totalDescription={`Total medals: ${data.medalComparisonData.chart_data.reduce(
            (sum: number, item: { medals: number }) => sum + item.medals,
            0
          )}`}
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
