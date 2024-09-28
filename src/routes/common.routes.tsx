import AddCustomerPage from "@/pages/add/add-customer";
import AddLanding from "@/pages/add/add-landing";
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
