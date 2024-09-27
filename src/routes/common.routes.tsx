import AddLanding from "@/pages/add/add-landing";
import SearchLanding from "@/pages/search/search-landing";
import JobSeekers from "@/pages/search/service-providers/job-seekers";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";

export const commonPaths = [
  {
    name: "Search",
    icon: HiOutlineMagnifyingGlass,
    children: [
      {
        element: <SearchLanding />,
        path: "search",
        name: "All",
        icon: FaRegCircle,
      },
      {
        name: "Job Seekers",
        path: "search/job-seekers",
        element: <JobSeekers />,
        icon: PiSuitcaseSimple,
      },
    ],
  },
  {
    name: "Add",
    path: "add",
    icon: IoMdAdd,
    element: <AddLanding />,
  },
];
