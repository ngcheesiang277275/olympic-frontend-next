"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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

interface BarChartData {
  category: string;
  value: number;
  fill: string;
}

interface HorizontalBarChartProps {
  title: string;
  description: string;
  data: BarChartData[];
  config: ChartConfig;
  trend?: {
    value: number;
    isUp: boolean;
    text: string;
  };
  footerText?: string;
  valueKey?: string;
  categoryKey?: string;
  hideXAxis?: boolean;
  barRadius?: number;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export function HorizontalBarChart({
  title,
  description,
  data,
  config,
  trend,
  footerText = "Showing total data for the last 6 months",
  valueKey = "value",
  categoryKey = "category",
  hideXAxis = true,
  barRadius = 5,
  margin = { left: 0 },
}: HorizontalBarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={margin}
          >
            <YAxis
              dataKey={categoryKey}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                config[value as keyof typeof config]?.label
              }
            />
            <XAxis dataKey={valueKey} type="number" hide={hideXAxis} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={valueKey} layout="vertical" radius={barRadius} />
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
