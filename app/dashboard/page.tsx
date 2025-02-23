import { DonutChart } from "@/components/charts/DonutChart";
import { LineChartCard } from "@/components/charts/LineChart";
import { StackedBarChart } from "@/components/charts/StackedBarChart";
import { StatCardGroup } from "@/components/charts/StatCardGroup";
import { Calendar, Flag, Medal, Trophy, Users } from "lucide-react";
import {
  genderChartConfig,
  medalChartConfig,
  medalComparisonChartConfig,
} from "../../constants/chart-dummy-data.constant";
import { MultiLineChart } from "@/components/charts/MultiLineChart";

export default async function Dashboard() {
  async function getData() {
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
      totalCountriesResponse,
    ] = await Promise.all([
      fetch("http://127.0.0.1:8000/api/medal-ranking"),
      fetch("http://127.0.0.1:8000/api/medal-comparison?country=Malaysia"),
      fetch("http://127.0.0.1:8000/api/gender-distribution"),
      fetch("http://127.0.0.1:8000/api/gender-trend"),
      fetch("http://127.0.0.1:8000/api/top-athletes"),
      fetch("http://127.0.0.1:8000/api/stats/total-athletes"),
      fetch("http://127.0.0.1:8000/api/stats/total-olympics"),
      fetch("http://127.0.0.1:8000/api/stats/total-medals"),
      fetch("http://127.0.0.1:8000/api/stats/total-sports"),
      fetch("http://127.0.0.1:8000/api/stats/total-countries"),
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
      totalCountries,
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
      totalCountriesResponse.json(),
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
      {
        title: "Total Countries",
        value: totalCountries.total_countries,
        icon: <Flag className="h-4 w-4 text-muted-foreground" />,
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
          config={{ medals: { color: medalComparisonChartConfig.medal.color } }}
          trendingDescription={""}
          totalDescription={`Total medals: ${data.medalComparisonData.chart_data.reduce(
            (sum: number, item: { medals: number }) => sum + item.medals,
            0
          )}`}
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
        />
      </div>
    </div>
  );
}
