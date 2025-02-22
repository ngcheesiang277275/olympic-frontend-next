"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

interface StackedChartData {
  [key: string]: string | number;
  xAxis: string;
}

interface StackedAreaConfig {
  dataKey: string;
  fill: string;
  stroke: string;
  fillOpacity?: number;
  type?: "natural" | "linear" | "monotone";
}

interface StackedChartProps {
  title: string;
  description: string;
  data: StackedChartData[];
  config: ChartConfig;
  areas: StackedAreaConfig[];
  trend?: {
    value: number;
    isUp: boolean;
    text: string;
  };
  xAxisKey?: string;
  dateRange?: string;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  xAxisFormatter?: (value: string) => string;
}

export function StackedChart({
  title,
  description,
  data,
  config,
  areas,
  trend,
  xAxisKey = "xAxis",
  dateRange = "January - June 2024",
  margin = { left: 12, right: 12 },
  xAxisFormatter = (value: string) => value.slice(0, 3),
}: StackedChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <AreaChart accessibilityLayer data={data} margin={margin}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={xAxisFormatter}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {areas.map((area, index) => (
              <Area
                key={area.dataKey}
                dataKey={area.dataKey}
                type={area.type || "natural"}
                fill={area.fill}
                fillOpacity={area.fillOpacity || 0.4}
                stroke={area.stroke}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {trend && (
              <div className="flex items-center gap-2 font-medium leading-none">
                {trend.text}
                {trend.isUp ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
              </div>
            )}
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {dateRange}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
