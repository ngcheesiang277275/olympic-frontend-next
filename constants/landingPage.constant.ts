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

export const members: LandingPageMember[] = [
  {
    description:
      "lorem lorem lorem lorem lorem loremlorem lorem loreml orem  123 12 lorem lorem",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpotawatomizoo.org%2Fanimal%2Fcapybara%2F&psig=AOvVaw0Y6YhK4zGKu1pzPicwTSgL&ust=1740296956187000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJidnMDl1osDFQAAAAAdAAAAABAE",
    name: "NG CHEE SIANG",
  },
  {
    description:
      "lorem lorem lorem lorem lorem loremlorem lorem loreml orem lorem lorem xxxad2323",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonecollection.com%2Fen%2Fblog%2Fitem%2F3433-attention-capybara-fans&psig=AOvVaw0Y6YhK4zGKu1pzPicwTSgL&ust=1740296956187000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJidnMDl1osDFQAAAAAdAAAAABAJ",
    name: "MUHAMMAD MUAZ BIN MD HAZALI",
  },
];
