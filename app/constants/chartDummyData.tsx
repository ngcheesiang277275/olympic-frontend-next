import { ChartConfig } from "@/components/ui/chart";

export const browserData = [
  { category: "chrome", value: 575, fill: "hsl(var(--chart-1))" },
  { category: "safari", value: 200, fill: "hsl(var(--chart-2))" },
  { category: "firefox", value: 187, fill: "hsl(var(--chart-3))" },
  { category: "edge", value: 173, fill: "hsl(var(--chart-4))" },
  { category: "other", value: 90, fill: "hsl(var(--chart-5))" },
];

export const browserConfig = {
  value: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const donutBrowserData = [
  { category: "chrome", value: 275, fill: "hsl(var(--chart-1))" },
  { category: "safari", value: 200, fill: "hsl(var(--chart-2))" },
  { category: "firefox", value: 287, fill: "hsl(var(--chart-3))" },
  { category: "edge", value: 173, fill: "hsl(var(--chart-4))" },
  { category: "IE", value: 53, fill: "hsl(var(--chart-1))" },
  { category: "other", value: 190, fill: "hsl(var(--chart-5))" },
];

export const donutBrowserConfig = {
  value: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  ie: {
    label: "IE",
    color: "hsl(var(--chart-1))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const visitorData = [
  { xAxis: "January", desktop: 186, mobile: 80 },
  { xAxis: "February", desktop: 305, mobile: 200 },
  { xAxis: "March", desktop: 237, mobile: 120 },
  { xAxis: "April", desktop: 73, mobile: 190 },
  { xAxis: "May", desktop: 209, mobile: 130 },
  { xAxis: "June", desktop: 214, mobile: 140 },
];

export const visitorConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const areaConfigs = [
  {
    dataKey: "mobile",
    fill: "var(--color-mobile)",
    stroke: "var(--color-mobile)",
  },
  {
    dataKey: "desktop",
    fill: "var(--color-desktop)",
    stroke: "var(--color-desktop)",
  },
];

export const monthlyData = [
  { xAxis: "January", desktop: 186 },
  { xAxis: "February", desktop: 305 },
  { xAxis: "March", desktop: 237 },
  { xAxis: "April", desktop: 73 },
  { xAxis: "May", desktop: 209 },
  { xAxis: "June", desktop: 214 },
];

export const desktopConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const barConfig = {
  dataKey: "desktop",
  fill: "var(--color-desktop)",
  radius: 8,
};
