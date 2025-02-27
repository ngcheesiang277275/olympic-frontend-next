"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX } from "react";

interface StatData {
  title: string;
  value: number;
  icon: JSX.Element;
}

interface StatCardGroupProps {
  data: StatData[];
}

export function StatCardGroup({ data }: StatCardGroupProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {item.value.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
