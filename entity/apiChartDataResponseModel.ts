export interface ApiChartDataResponse {
  chart_data: ChartData;
  chart_type: "bar" | "line" | "pie" | "doughnut" | "radar"; // Add other chart types as needed
  filters: Filters;
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface Filters {
  years: number[];
}

// Optional: Type guard to validate the response
export function isApiChartDataResponse(obj: any): obj is ApiChartDataResponse {
  return (
    obj &&
    typeof obj === "object" &&
    "chart_data" in obj &&
    "chart_type" in obj &&
    "filters" in obj &&
    Array.isArray(obj.chart_data.labels) &&
    Array.isArray(obj.chart_data.datasets) &&
    Array.isArray(obj.filters.years)
  );
}
