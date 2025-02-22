import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BenefitsCardProps {
  description: string;
  image: string;
  name: string;
}

export function ImageCard({ description, image, name }: BenefitsCardProps) {
  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden mt-4 space-y-4">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover bg-black"
      />
      <div className="absolute bottom-5 left-[50%] w-[90%] -translate-x-[50%] rounded-md bg-white p-4">
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="description-text">{description}</p>
      </div>
    </div>
  );
}
