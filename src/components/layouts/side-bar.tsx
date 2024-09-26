import "@/styles/sidebar.style.css";
import { TSidebarItem } from "@/types";
import { Layout } from "antd";
import { Role } from "../../constants/roles";
import { investorPaths } from "../../routes/investor.routes";
import { sidebarItemsGenerator } from "../../utility/sidebarItemsGenerator";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/auth/authSlice";
import SidebarMenuItems from "./sidebar-menu-item";
import { commonPaths } from "@/routes/common.routes";
const { Sider } = Layout;

const Sidebar = () => {
  const user = useAppSelector(selectUser);
  const commonSidebarItems = sidebarItemsGenerator(commonPaths);
  let sidebarItemsOfUser;

  switch (user!.current_role) {
    case Role.INVESTOR:
      sidebarItemsOfUser = sidebarItemsGenerator(investorPaths, Role.INVESTOR);
      break;

    default:
      break;
  }

  const sidebarItems = [...(sidebarItemsOfUser as TSidebarItem[]), ...commonSidebarItems];
  // console.log(sidebarItems);

  return (
    <Sider width={"346px"} style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}>
      <div className="space-y-5 text-white">
        <div
          className="border-b"
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Empower</h1>
        </div>
        <div className="tree space-y-4 px-6">
          {sidebarItems && sidebarItems?.map((data: TSidebarItem, i) => <SidebarMenuItems data={data} key={i} />)}
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
