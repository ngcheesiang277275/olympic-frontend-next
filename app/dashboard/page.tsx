import { DonutChart } from "@/components/charts/DonutChart";
import { MultiLineChart } from "@/components/charts/MultiLineChart";
import { StackedBarChart } from "@/components/charts/StackedBarChart";
import { StatCardGroup } from "@/components/charts/StatCardGroup";
import { Calendar, Medal, Trophy, Users } from "lucide-react";
import {
  genderChartConfig,
  medalChartConfig,
  medalComparisonChartConfig,
} from "../../constants/chart-dummy-data.constant";

async function getData() {
  try {
    const [
      medalRankingResponse,
      medalComparisonResponse,
      genderStatsResponse,
      genderTrendResponse,
      topAthletesResponse,
      totalAthletesResponse,
      totalOlympicsResponse,
      totalMedalsResponse,
      totalSportsResponse,
    ] = await Promise.all([
      fetch("http://127.0.0.1:8000/api/medal-ranking", { cache: "no-store" }),
      fetch("http://127.0.0.1:8000/api/medal-comparison?country=Malaysia", {
        cache: "no-store",
      }),
      fetch("http://127.0.0.1:8000/api/gender-distribution", {
        cache: "no-store",
      }),
      fetch("http://127.0.0.1:8000/api/gender-trend", { cache: "no-store" }),
      fetch("http://127.0.0.1:8000/api/top-athletes", { cache: "no-store" }),
      fetch("http://127.0.0.1:8000/api/stats/total-athletes", {
        cache: "no-store",
      }),
      fetch("http://127.0.0.1:8000/api/stats/total-olympics", {
        cache: "no-store",
      }),
      fetch("http://127.0.0.1:8000/api/stats/total-medals", {
        cache: "no-store",
      }),
      fetch("http://127.0.0.1:8000/api/stats/total-sports", {
        cache: "no-store",
      }),
    ]);

    const [
      medalRankingData,
      medalComparisonData,
      genderStatsData,
      genderTrendData,
      topAthletesData,
      totalAthletes,
      totalOlympics,
      totalMedals,
      totalSports,
    ] = await Promise.all([
      medalRankingResponse.json(),
      medalComparisonResponse.json(),
      genderStatsResponse.json(),
      genderTrendResponse.json(),
      topAthletesResponse.json(),
      totalAthletesResponse.json(),
      totalOlympicsResponse.json(),
      totalMedalsResponse.json(),
      totalSportsResponse.json(),
    ]);

    const genderChartData = genderStatsData.data.map(
      (item: { gender: string; athletes: number; percentage: number }) => ({
        name: item.gender.charAt(0).toUpperCase() + item.gender.slice(1),
        value: item.athletes,
        percentage: item.percentage,
      })
    );

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
    ];

    return {
      medalRankingData,
      medalComparisonData,
      genderStatsData: {
        data: genderChartData,
        total: genderStatsData.total_athletes,
      },
      genderTrendData,
      topAthletesData,
      statsData,
    };
  } catch (error) {
    throw new Error("Failed to fetch dashboard data");
  }
}

export default async function Dashboard() {
  const data = await getData();

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
        <MultiLineChart
          title="Medal Trends of Top 5 Countries"
          description={`Year ${data.medalComparisonData.filters.years[0]} - ${
            data.medalComparisonData.filters.years[
              data.medalComparisonData.filters.years.length - 1
            ]
          }`}
          data={data.medalComparisonData.chart_data}
          config={medalComparisonChartConfig}
          trendingDescription="United States leads with most total medals"
          totalDescription={`Total medals by country: ${Object.entries(
            data.medalComparisonData.chart_data.reduce(
              (acc: Record<string, number>, item: Record<string, number>) => {
                Object.keys(item).forEach((key) => {
                  if (key !== "xAxis") {
                    acc[key] = (acc[key] || 0) + item[key];
                  }
                });
                return acc;
              },
              {}
            )
          )
            .map(([country, total]) => `${country}: ${total}`)
            .join(", ")}`}
        />
      </div>

      <div className="child-grid">
        <StackedBarChart
          title="Top Athletes"
          data={data.topAthletesData.data}
          config={medalChartConfig}
          trendDescription={`${data.topAthletesData.data[0].xAxis} having the most medals`}
          totalDescription={`Total medals: ${
            data.topAthletesData.data[0].gold +
            data.topAthletesData.data[0].silver +
            data.topAthletesData.data[0].bronze
          }`}
        />
        <DonutChart
          title="Gender Distribution"
          description="Distribution of athletes by gender"
          data={data.genderStatsData.data}
          config={genderChartConfig}
        />
        <MultiLineChart
          title="Gender Trends"
          description="Gender trends of athletes"
          data={data.genderTrendData.data}
          config={genderChartConfig}
          trendingDescription={`Highest male participation was in the 1992 Olympics with 8,496 athletes`}
          totalDescription={`Latest Olympics (${
            data.genderTrendData.data[data.genderTrendData.data.length - 1]
              .xAxis
          }): ${data.genderTrendData.data[
            data.genderTrendData.data.length - 1
          ].male.toLocaleString()} male and ${data.genderTrendData.data[
            data.genderTrendData.data.length - 1
          ].female.toLocaleString()} female athletes`}
        />
      </div>
    </div>
  );
}
