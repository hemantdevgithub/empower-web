import SearchLanding from "@/pages/search/search-landing";
import JobSeekers from "@/pages/search/service-providers/job-seekers";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const commonPaths = [
  {
    name: "Search",
    path: "search",
    icon: HiOutlineMagnifyingGlass,
    element: <SearchLanding />,
  },
  {
    name: "Search",
    path: "search/service-providers/job-seekers",
    element: <JobSeekers />,
  },
];
