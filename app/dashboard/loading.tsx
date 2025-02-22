import { SkeletonChart } from "@/components/charts/SkeletonChart";

const Loading = () => {
  return (
    <div className="parent-grid">
      <div className="child-first-grid">
        <SkeletonChart></SkeletonChart>
        <SkeletonChart></SkeletonChart>
        <div className="col-span-2 lg:col-span-1">
          <SkeletonChart></SkeletonChart>
        </div>
      </div>
      <div className="child-second-grid">
        <SkeletonChart></SkeletonChart>
        <SkeletonChart></SkeletonChart>
      </div>
    </div>
  );
};

export default Loading;
