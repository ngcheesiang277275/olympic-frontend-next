import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

interface BenefitsCardProps {
  description: string;
  endpoint: string;
  requestMethod: string;
}

export function ApiAccordion({
  description,
  endpoint,
  requestMethod,
}: BenefitsCardProps) {
  return (
    <AccordionItem
      value={endpoint}
      className="p-4 bg-secondary-color hover:bg-slate-200 hover:cursor-pointer rounded-lg"
    >
      <AccordionTrigger className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <div className="bg-slate-300 text-secondary-color rounded-full text-sm py-0.5 px-2">
          {requestMethod}
        </div>
        <p>{endpoint}</p>
      </AccordionTrigger>
      <AccordionContent className="mt-4">
        <p className="text-secondary-color">{description}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
