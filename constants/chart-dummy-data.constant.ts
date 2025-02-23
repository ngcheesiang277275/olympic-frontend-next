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

export const medalComparisonChartConfig = {
  "United States": { label: "United States", color: "#1E88E5" },
  "Soviet Union": { label: "Soviet Union", color: "#D81B60" },
  Germany: { label: "Germany", color: "#FFC107" },
  "Great Britain": { label: "Great Britain", color: "#004D40" },
  France: { label: "France", color: "#7B1FA2" },
} satisfies ChartConfig;

export const genderChartConfig = {
  Male: {
    label: "Male",
    color: "#A2BFFE",
  },
  Female: {
    label: "Female",
    color: "#FF69B4",
  },
} satisfies ChartConfig;
