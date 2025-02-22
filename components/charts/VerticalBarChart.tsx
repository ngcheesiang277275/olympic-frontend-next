"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface VerticalBarChartData {
  [key: string]: string | number;
  xAxis: string;
}

interface BarConfig {
  dataKey: string;
  fill: string;
  radius?: number;
}

interface VerticalBarChartProps {
  title: string;
  description: string;
  data: VerticalBarChartData[];
  config: ChartConfig;
  bar: BarConfig;
  trend?: {
    value: number;
    isUp: boolean;
    text: string;
  };
  xAxisKey?: string;
  footerText?: string;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  xAxisFormatter?: (value: string) => string;
}

export function VerticalBarChart({
  title,
  description,
  data,
  config,
  bar,
  trend,
  xAxisKey = "xAxis",
  footerText = "Showing total data for the last 6 months",
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  xAxisFormatter = (value: string) => value.slice(0, 3),
}: VerticalBarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data} margin={margin}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={xAxisFormatter}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey={bar.dataKey}
              fill={bar.fill}
              radius={bar.radius || 8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {trend && (
          <div className="flex gap-2 font-medium leading-none">
            {trend.text}
            {trend.isUp ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
          </div>
        )}
        <div className="leading-none text-muted-foreground">{footerText}</div>
      </CardFooter>
    </Card>
  );
}
