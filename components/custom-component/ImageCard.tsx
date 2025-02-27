import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BenefitsCardProps {
  description: string;
  image: string;
  name: string;
}

export function ImageCard({ description, image, name }: BenefitsCardProps) {
  return (
    <div className="md:max-w-[350px] padding bg-white rounded-lg space-y-4 mx-auto lg:mx-0">
      <img
        className="rounded-lg w-full aspect-square"
        src={image}
        alt={image}
      />
      <h3 className="text-xl text-center font-semibold mb-2">{name}</h3>
      <p className="description-text text-center">{description}</p>
    </div>

    // <div className="relative h-[400px] w-full rounded-lg overflow-hidden mt-4 space-y-4 flexbox-center">
    //   <img
    //     src={image}
    //     alt={name}
    //     className="size-[200px] p-2 rounded-full object-cover bg-white -translate-y-10"
    //   />
    //   <div className="absolute bottom-5 left-[50%] w-[90%] -translate-x-[50%] rounded-md bg-white p-4 lg:h-[180px]">
    //     <h3 className="text-xl text-center font-semibold mb-2">{name}</h3>
    //     <p className="description-text text-center">{description}</p>
    //   </div>
    // </div>
  );
}
