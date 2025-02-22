export interface ApiChartDataResponse {
  chart_data: ChartData;
  chart_type: "bar" | "line" | "pie" | "doughnut" | "radar"; 
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