"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export function SkeletonChart() {
  return (
    <Card className="pt-6">
      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square space-y-4">
          <Skeleton className="w-1/2 h-4 rounded-lg"></Skeleton>
          <Skeleton className="w-full h-4 rounded-lg"></Skeleton>
          <Skeleton className="w-full h-2/3 rounded-lg"></Skeleton>
        </div>
      </CardContent>
    </Card>
  );
}
