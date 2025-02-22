"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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
import ChartDataType from "@/entity/chartDataModel";

interface DonutChartProps {
  title: string;
  description: string;
  data: ChartDataType[];
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
  centerLabel?: {
    value?: string;
    subtitle?: string;
  };
  innerRadius?: number;
  strokeWidth?: number;
}

export function DonutChart({
  title,
  description,
  data,
  config,
  trend,
  footerText = "Showing total data for the last 6 months",
  maxHeight = "250px",
  valueKey = "value",
  categoryKey = "category",
  centerLabel,
  innerRadius = 60,
  strokeWidth = 5,
}: DonutChartProps) {
  const totalValue = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr[valueKey], 0);
  }, [data, valueKey]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square"
          style={{ maxHeight }}
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey={valueKey}
              nameKey={categoryKey}
              innerRadius={innerRadius}
              strokeWidth={strokeWidth}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {centerLabel?.value || totalValue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {centerLabel?.subtitle || "Total"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
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
