import AddCustomerPage from "@/pages/add/add-customer";
import AddLanding from "@/pages/add/add-landing";
import AddServiceProviderPage from "@/pages/add/add-service-provider";
import ReferPage from "@/pages/refer/refer-page";
import SearchLanding from "@/pages/search/search-landing";
import JobSeekers from "@/pages/search/service-providers/job-seekers";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { LiaShareAltSolid } from "react-icons/lia";
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
    children: [
      {
        path: "add/add-customer",
        name: "All",
        icon: FaRegCircle,
        element: <AddCustomerPage />,
      },
      {
        path: "add/add-service-provider",
        name: "All",
        icon: FaRegCircle,
        element: <AddServiceProviderPage />,
      },
    ],
  },
  {
    name: "Refer",
    path: "refer",
    icon: LiaShareAltSolid,
    element: <ReferPage />,
  },
];
