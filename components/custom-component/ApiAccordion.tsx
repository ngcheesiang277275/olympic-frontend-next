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
    <AccordionItem value={endpoint} className="p-4 bg-[#1b1827] rounded-lg">
      <AccordionTrigger className="flex items-center gap-4 w-full">
        <div className="bg-slate-500 text-secondary-color rounded-full text-sm py-0.5 px-2">
          {requestMethod}
        </div>
        <p className="text-white">{endpoint}</p>
      </AccordionTrigger>
      <AccordionContent className="mt-4">
        <p className="text-secondary-color">{description}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
