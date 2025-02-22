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

export const apiExample: LandingPageApiExample[] = [
  {
    description:
      "Get the medal rankings for each country in different Olympic years.",
    endpoint: "/api/medal",
    requestMethod: "GET",
  },
  {
    description: "Compare medal counts across different Olympic years.",
    endpoint: "/api/medal/comparison",
    requestMethod: "GET",
  },
  {
    description:
      "Retrieve an athlete's performance records, including times, scores, and achievements.",
    endpoint: "/api/athlete/performance",
    requestMethod: "GET",
  },
  {
    description:
      "Get an athlete's Olympic experience, including participation history and medals won.",
    endpoint: "/api/athlete/experience",
    requestMethod: "GET",
  },
  {
    description:
      "Get details of Olympic events, including schedules, sports categories, and results.",
    endpoint: "/api/event",
    requestMethod: "GET",
  },
  {
    description:
      "Retrieve information about the host country for each Olympic edition.",
    endpoint: "/api/host-country",
    requestMethod: "GET",
  },
];

export const benefits: LandingPageBenefit[] = [
  {
    title: "Detailed Historical Data",
    description:
      "Access detailed records of past Olympic events, including athletes, results, and medal counts.",
    image: "string",
  },
  {
    title: "Fast and Efficient Queries",
    description:
      "Optimized with Next.js and FastAPI to deliver historical Olympic data quickly and efficiently.",
    image: "string",
  },
  {
    title: "Data Accuracy and Integrity",
    description:
      "Our database is sourced from official Olympic records, ensuring high accuracy in historical data.",
    image: "string",
  },
  {
    title: "Developer-Friendly API",
    description:
      "Well-structured endpoints make it easy for developers to integrate Olympic data into their applications.",
    image: "string",
  },
];

export const members: LandingPageMember[] = [];
