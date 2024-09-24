/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu } from "antd";
import { Role } from "../../constants/roles";
import { sidebarItemsGenerator } from "../../utility/sidebarItemsGenerator";
import { investorPaths } from "../../routes/investor.routes";

const { Sider } = Layout;

const Sidebar = () => {
  const user = {
    current_role: "INVESTOR",
  };

  let sidebarItems;

  switch (user!.current_role) {
    case Role.INVESTOR:
      sidebarItems = sidebarItemsGenerator(investorPaths, Role.INVESTOR);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems as any}
      />
    </Sider>
  );
};

export default Sidebar;
