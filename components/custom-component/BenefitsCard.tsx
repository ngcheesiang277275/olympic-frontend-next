"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BenefitsCardProps {
  description: string;
  icon?: React.ReactNode;
  title: string;
}

export function BenefitsCard({ title, description, icon }: BenefitsCardProps) {
  return (
    <Card className="min-h-[150px] hover:scale-105 hover:bg-black group hover:text-white transition-all duration-300 sm:min-h-[250px] lg:min-h-[280px] xl:min-h-[260px]">
      <CardHeader>
        {icon ? icon : <div className="size-8 rounded-full bg-slate-500"></div>}
        <h3 className="font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="description-text group-hover:text-slate-200">
        {description}
      </CardContent>
    </Card>
  );
}
