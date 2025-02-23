import { ChartConfig } from "@/components/ui/chart";

export const barConfig = {
  dataKey: "desktop",
  fill: "var(--color-desktop)",
  radius: 8,
};

export const medalChartConfig = {
  gold: { label: "Gold", color: "#FFD700" },
  silver: { label: "Silver", color: "#C0C0C0" },
  bronze: { label: "Bronze", color: "#CD7F32" },
} satisfies ChartConfig;

export const genderChartConfig = {
  Male: {
    label: "Male",
    color: "#DBDBDB",
  },
  Female: {
    label: "Female",
    color: "#7D7D7D",
  },
} satisfies ChartConfig;
