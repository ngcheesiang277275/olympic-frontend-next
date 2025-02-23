"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface LineChartCardProps {
  title: string;
  description: string;
  data: any[];
  config: {
    medals: {
      color: string;
    };
  };
  trendingDescription?: string;
  totalDescription?: string;
}

export function LineChartCard({
  title,
  description,
  data,
  config,
  trendingDescription,
  totalDescription,
}: LineChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="xAxis"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.toString()}
              padding={{ left: 20, right: 20 }}
              allowDataOverflow={true}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="medals"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
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
    </Card>
  );
}
