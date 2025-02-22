import { SkeletonChart } from "@/components/charts/SkeletonChart";

const Loading = () => {
  return (
    <div className="parent-grid">
      <div className="child-grid">
        <SkeletonChart></SkeletonChart>
        <SkeletonChart></SkeletonChart>
      </div>
      <SkeletonChart></SkeletonChart>
      <div className="child-grid">
        <SkeletonChart></SkeletonChart>
        <SkeletonChart></SkeletonChart>
      </div>
    </div>
  );
};

export default Loading;
