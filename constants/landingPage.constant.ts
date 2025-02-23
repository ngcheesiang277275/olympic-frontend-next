interface LandingPageApiExample {
  description: string;
  endpoint: string;
  requestMethod: string;
}

interface LandingPageBenefit {
  description: string;
  image: React.ReactNode;
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
      "Get the medal rankings for top countries, showing gold, silver, and bronze medals.",
    endpoint: "/api/medal-ranking",
    requestMethod: "GET",
  },
  {
    description: "Compare medal performance over time for top 5 countries.",
    endpoint: "/api/medal-comparison",
    requestMethod: "GET",
  },
  {
    description:
      "Get the distribution of male and female athletes across all Olympics.",
    endpoint: "/api/gender-distribution",
    requestMethod: "GET",
  },
  {
    description: "Get the top athletes ranked by their total medal count.",
    endpoint: "/api/top-athletes",
    requestMethod: "GET",
  },
  {
    description:
      "Track the historical trend of male and female athlete participation.",
    endpoint: "/api/gender-trend",
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
    image: "Trophy",
  },
  {
    title: "Data Accuracy and Integrity",
    description:
      "Our database is sourced from official Olympic records, ensuring high accuracy in historical data.",
    image: "Calendar",
  },
  {
    title: "Developer-Friendly API",
    description:
      "Well-structured endpoints make it easy for developers to integrate Olympic data into their applications.",
    image: "Users",
  },
];

export const members: LandingPageMember[] = [
  {
    description:
      "Contributed to frontend development, UI/UX design and API development of the Olympic dashboard project, creating responsive interfaces and implementing RESTful endpoints.",
    image: "https://csland.me/static/media/propic2.f333cb67e19b10f0a21e.jpg",
    name: "NG CHEE SIANG",
  },
  {
    description:
      "Contributed to data preprocessing and backend development of the Olympic dashboard project, implementing efficient data pipelines and RESTful APIs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsnoAcVxA2TRUxXw7XqDE1nCmBTt1PwbmJw&s",
    name: "MUAZ HAZALI",
  },
];
