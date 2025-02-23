# Olympic Dashboard Frontend Documentation

## Overview

This is a Next.js-based frontend application that provides an interactive interface for exploring Olympic history data. The application features a landing page and a dashboard with various data visualizations and API endpoints for accessing Olympic historical data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Charts**: Shadcn UI Charts
- **Icons**: Lucide Icons

## Project Structure

### Core Components

#### 1. Landing Page (`app/page.tsx`)

The landing page consists of three main sections:

- Hero section with introduction
- Benefits section
- API Endpoints section
- Team Members section

#### 2. Dashboard (`app/dashboard/page.tsx`)

The dashboard page features:

- Statistical overview cards
- Medal rankings visualization
- Gender distribution charts
- Historical trend analysis

### Component Library

#### Custom Components

1. **ApiAccordion**

```typescript
interface ApiAccordionProps {
  description: string;
  endpoint: string;
  requestMethod: string;
}
```

Used to display API endpoint information in an expandable accordion format.

2. **BenefitsCard**

```typescript
interface BenefitsCardProps {
  description: string;
  icon?: React.ReactNode;
  title: string;
}
```

Displays feature benefits with icons and descriptions.

3. **ImageCard**

```typescript
interface ImageCardProps {
  description: string;
  image: string;
  name: string;
}
```

Used for displaying team member information with their image and description.

#### Chart Components

1. **DonutChart**

```typescript
interface DonutChartProps {
  title: string;
  description: string;
  data: Array<{ name: string; value: number; percentage: number }>;
  config: ChartConfig;
}
```

2. **MultiLineChart**

```typescript
interface MultiLineChartProps {
  title: string;
  description: string;
  data: Array<{ xAxis: string; [key: string]: string | number }>;
  config: ChartConfig;
  trendingDescription?: string;
  totalDescription?: string;
}
```

3. **StackedBarChart**

```typescript
interface StackedBarChartProps {
  title: string;
  description: string;
  data: Array<Record<string, number>>;
  config: ChartConfig;
  trendDescription: string;
  totalDescription: string;
}
```

4. **StatCardGroup**

```typescript
interface StatData {
  title: string;
  value: number;
  icon: JSX.Element;
}
```

### API Integration

The application integrates with the following API endpoints:

1. **Medal Rankings**

- Endpoint: `/api/medal-ranking`
- Method: GET
- Description: Retrieves medal rankings for top countries

2. **Medal Comparison**

- Endpoint: `/api/medal-comparison`
- Method: GET
- Description: Compares medal performance over time for top 5 countries

3. **Gender Distribution**

- Endpoint: `/api/gender-distribution`
- Method: GET
- Description: Shows distribution of male and female athletes

4. **Gender Trends**

- Endpoint: `/api/gender-trend`
- Method: GET
- Description: Historical trend of gender participation

5. **Top Athletes**

- Endpoint: `/api/top-athletes`
- Method: GET
- Description: Rankings of athletes by medal count

### Constants and Configuration

#### Landing Page Constants

```typescript
interface LandingPageApiExample {
  description: string;
  endpoint: string;
  requestMethod: string;
}

interface LandingPageBenefit {
  description: string;
  image: string;
  title: string;
}

interface LandingPageMember {
  description: string;
  image: string;
  name: string;
}
```

#### Chart Configurations

```typescript
const medalChartConfig = {
  gold: { label: "Gold", color: "#FFD700" },
  silver: { label: "Silver", color: "#C0C0C0" },
  bronze: { label: "Bronze", color: "#CD7F32" },
};

const genderChartConfig = {
  Male: { label: "Male", color: "#A2BFFE" },
  Female: { label: "Female", color: "#FF69B4" },
};
```

## Styling

The application uses a combination of Tailwind CSS classes and custom utilities:

### Common Classes

- `section-size`: Defines standard section sizing
- `max-width`: Controls maximum content width
- `flexbox-center`: Centers content using flexbox
- `padding`: Standard padding utility
- `description-text`: Text styling for descriptions
- `hero-font`: Hero section typography
- `subhero-font`: Sub-heading typography

### Responsive Design

The application implements responsive design with the following breakpoints:

- `sm`: Small devices
- `md`: Medium devices
- `lg`: Large devices
- `xl`: Extra large devices

## Features

1. **Simple Data Visualization**

   - Medal count charts
   - Gender distribution analysis
   - Historical trend visualization
   - Country performance comparisons

2. **Responsive Design**

   - Mobile-first approach
   - Adaptive layouts for different screen sizes
   - Interactive components optimized for touch and mouse input

3. **API Documentation**

   - Interactive API endpoint documentation
   - Request method indicators
   - Endpoint descriptions and usage examples

4. **Team Showcase**
   - Team member profiles
   - Role descriptions
   - Professional images

## Performance Considerations

1. **Data Fetching**

   - Parallel API calls using `Promise.all`
   - Server-side rendering for initial data
   - Optimized data transformations

2. **Component Optimization**

   - Client-side components marked with "use client"
   - Efficient state management
   - Optimized chart rendering

3. **Asset Optimization**
   - Responsive images
   - Icon optimization using Lucide
   - Lazy loading where appropriate

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
