"use client";

import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { ChartConfig } from "@/components/ui/chart";

interface DonutChartProps {
  title: string;
  description: string;
  data: Array<{ name: string; value: number; percentage: number }>;
  config: ChartConfig;
}

export function DonutChart({
  title,
  description,
  data,
  config,
}: DonutChartProps) {
  const chartData = Array.isArray(data) ? data : [];
  const malePercentage =
    chartData.find((d) => d.name === "Male")?.percentage || 0;
  const femalePercentage =
    chartData.find((d) => d.name === "Female")?.percentage || 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) =>
                  viewBox && "cx" in viewBox && "cy" in viewBox ? (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy - 12}
                        className="fill-foreground text-lg font-medium"
                      >
                        {`♂ ${malePercentage.toFixed(1)}%`}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 12}
                        className="fill-foreground text-lg font-medium"
                      >
                        {`♀ ${femalePercentage.toFixed(1)}%`}
                      </tspan>
                    </text>
                  ) : null
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  );
}
