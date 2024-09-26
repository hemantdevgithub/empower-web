import SearchLanding from "@/pages/search/search-landing";
import JobSeekers from "@/pages/search/service-providers/job-seekers";

export const searchPaths = [
  {
    name: "Search",
    path: "search",
    element: <SearchLanding />,
  },
  {
    name: "Search",
    path: "search/service-providers/job-seekers",
    element: <JobSeekers />,
  },
];
