import "@/styles/sidebar.style.css";
import { TSidebarItem } from "@/types";
import { Layout } from "antd";
import { useState } from "react";
import { Role } from "../../constants/roles";
import { investorPaths } from "../../routes/investor.routes";
import { sidebarItemsGenerator } from "../../utility/sidebarItemsGenerator";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/auth/authSlice";
const { Sider } = Layout;

const Sidebar = () => {
  const user = useAppSelector(selectUser);

  let sidebarItems;

  switch (user!.current_role) {
    case Role.INVESTOR:
      sidebarItems = sidebarItemsGenerator(investorPaths, Role.INVESTOR);
      break;

    default:
      break;
  }

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
          {sidebarItems && sidebarItems?.map((_x: TSidebarItem, i) => <SidebarMenuItems key={i} />)}
        </div>
      </div>
    </Sider>
  );
};

const SidebarMenuItems = () => {
  const [open, setOpen] = useState(true);
  return (
    <ul className="relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-3 text-lg text-primary"
      >
        <img src="/performance-active.png" className="size-[30px]" alt="Icons" />
        <span>Performance</span>
      </div>
      {open && (
        <>
          {Array.from({ length: 3 }).map((_y, i) => (
            <li key={i} className="py-3 pl-10">
              <div className="flex items-center gap-3 text-lg">
                <img src="/performance.png" className="size-[30px]" alt="Icons" />
                <span>Performance</span>
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default Sidebar;
