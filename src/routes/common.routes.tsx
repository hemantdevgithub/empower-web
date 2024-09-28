import AddLanding from "@/pages/add/add-landing";
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
    name: "Refer",
    path: "refer",
    icon: LiaShareAltSolid,
    element: <ReferPage />,
  },
];
