"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
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

interface MultiLineChartProps {
  title: string;
  description: string;
  data: Array<{
    xAxis: string;
    male: number;
    female: number;
  }>;
  config: ChartConfig;
}

export function MultiLineChart({
  title,
  description,
  data,
  config,
}: MultiLineChartProps) {
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
            <Line
              type="monotone"
              dataKey="male"
              stroke={config.Male.color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="female"
              stroke={config.Female.color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
