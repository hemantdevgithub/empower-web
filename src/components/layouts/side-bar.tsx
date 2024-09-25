import { Layout } from "antd";
import { Role } from "../../constants/roles";
import { investorPaths } from "../../routes/investor.routes";
import { sidebarItemsGenerator } from "../../utility/sidebarItemsGenerator";

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
    <Sider width={"326px"} style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}>
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
        <SidebarMenu />
      </div>
    </Sider>
  );
};

const SidebarMenu = () => {
  return (
    <div className="px-5">
      {Array.from({
        length: 5,
      }).map((_x, i) => (
        <div key={i}>
          <img src="/" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
