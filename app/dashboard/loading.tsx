import { SkeletonChart } from "@/components/charts/SkeletonChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="parent-grid">
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((_, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-[100px]" />
              </CardTitle>
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <Skeleton className="h-8 w-[60px]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="child-grid">
        <SkeletonChart></SkeletonChart>
        <SkeletonChart></SkeletonChart>
      </div>
      <div className="child-grid">
        <SkeletonChart></SkeletonChart>
        <SkeletonChart></SkeletonChart>
      </div>
    </div>
  );
};

export default Loading;
