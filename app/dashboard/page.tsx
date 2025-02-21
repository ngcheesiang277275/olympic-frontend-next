import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="max-width padding grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="padding"></Card>
        <Card className="padding"></Card>
        <Card className="padding md:col-span-2 lg:col-span-1"></Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="padding"></Card>
        <Card className="padding"></Card>
      </div>
    </div>
  );
}
