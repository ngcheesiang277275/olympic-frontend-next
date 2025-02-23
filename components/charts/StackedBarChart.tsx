"use client";

import { TrendingUp } from "lucide-react";
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    dataKey: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid gap-2">
        <div className="font-medium">{label}</div>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="capitalize">{entry.dataKey}: </span>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackedBarChart({
  title,
  description,
  data,
  config,
  trendDescription,
  totalDescription,
}: {
  title: string;
  description?: string;
  data: Array<Record<string, number>>;
  config: ChartConfig;
  trendDescription: string;
  totalDescription: string;
}) {
  const keys = Object.keys(config);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="xAxis"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              content={<CustomTooltip />}
              cursor={{ fill: "var(--muted)" }}
            />
            <ChartLegend content={<ChartLegendContent />} />
            {keys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={config[key].color}
                radius={index === keys.length - 1 ? [4, 4, 0, 0] : [0, 0, 4, 4]}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {trendDescription} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {totalDescription}
        </div>
      </CardFooter>
    </Card>
  );
}
