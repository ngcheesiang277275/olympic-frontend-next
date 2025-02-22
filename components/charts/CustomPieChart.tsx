"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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

interface PieChartData {
  category: string;
  value: number;
  fill: string;
}

interface CustomPieChartProps {
  title: string;
  description: string;
  data: PieChartData[];
  config: ChartConfig;
  trend?: {
    value: number;
    isUp: boolean;
    text: string;
  };
  footerText?: string;
  maxHeight?: string;
  valueKey?: string;
  categoryKey?: string;
}

export function CustomPieChart({
  title,
  description,
  data,
  config,
  trend,
  footerText = "Showing total data for the last 6 months",
  maxHeight = "250px",
  valueKey = "value",
  categoryKey = "category",
}: CustomPieChartProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square px-0"
          style={{ maxHeight }}
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey={valueKey} hideLabel />}
            />
            <Pie
              data={data}
              dataKey={valueKey}
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload[valueKey]}
                  </text>
                );
              }}
              nameKey={categoryKey}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
        <div className="leading-none text-muted-foreground">{footerText}</div>
      </CardFooter>
    </Card>
  );
}
