import AddCustomerPage from "@/pages/add/add-customer";
import AddLanding from "@/pages/add/add-landing";
import AddOpportunities from "@/pages/add/add-opportunities";
import AddServiceProviderPage from "@/pages/add/add-service-provider";
import ReferPage from "@/pages/refer/refer-page";
import SearchLanding from "@/pages/search/search-landing";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { LiaShareAltSolid } from "react-icons/lia";

export const commonPaths = [
  {
    name: "Search",
    path: "search",
    icon: HiOutlineMagnifyingGlass,
    element: <SearchLanding />,
  },
  {
    name: "Add",
    path: "add",
    icon: IoMdAdd,
    element: <AddLanding />,
  },
  {
    path: "add/add-customer",
    element: <AddCustomerPage />,
  },
  {
    path: "add/add-service-provider",
    element: <AddServiceProviderPage />,
  },
  {
    path: "add/add-opportunities",
    element: <AddOpportunities />,
  },
  {
    name: "Refer",
    path: "refer",
    icon: LiaShareAltSolid,
    element: <ReferPage />,
  },
];
