"use client";

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

const truncateLabel = (label: string, maxLength: number = 10) => {
  return label.length > maxLength
    ? `${label.substring(0, maxLength)}...`
    : label;
};

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
          <BarChart
            accessibilityLayer
            data={data}
            margin={{ top: 40, right: 20, bottom: 60, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="xAxis"
              tickLine={false}
              tickMargin={25}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={70}
              interval={0}
              tick={{
                fontSize: 12,
              }}
              tickFormatter={(value) => truncateLabel(value)}
            />
            <ChartTooltip
              content={<CustomTooltip />}
              cursor={{ fill: "var(--muted)" }}
            />
            <ChartLegend
              content={<ChartLegendContent />}
              verticalAlign="top"
              align="center"
              height={36}
            />
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
          {trendDescription}
        </div>
        <div className="leading-none text-muted-foreground">
          {totalDescription}
        </div>
      </CardFooter>
    </Card>
  );
}
