"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

interface MultiLineChartProps {
  title: string;
  description: string;
  data: Array<{
    xAxis: string;
    [key: string]: string | number;
  }>;
  config: ChartConfig;
  trendingDescription?: string;
  totalDescription?: string;
}

export function MultiLineChart({
  title,
  description,
  data,
  config,
  trendingDescription,
  totalDescription,
}: MultiLineChartProps) {
  // Get data keys excluding xAxis
  const dataKeys = Object.keys(data[0] || {}).filter((key) => key !== "xAxis");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="xAxis"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {dataKeys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={config[key.charAt(0).toUpperCase() + key.slice(1)].label} // Convert to match config key
                stroke={
                  config[key.charAt(0).toUpperCase() + key.slice(1)].color
                }
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      {(trendingDescription || totalDescription) && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {trendingDescription && (
            <div className="flex gap-2 font-medium leading-none">
              {trendingDescription}
            </div>
          )}
          {totalDescription && (
            <div className="leading-none text-muted-foreground">
              {totalDescription}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
