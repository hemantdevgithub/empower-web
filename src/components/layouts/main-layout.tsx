import { colors } from "@/constants/theme";
import { Layout, Switch } from "antd";
import Input from "antd/es/input/Input";
import { Header } from "antd/es/layout/layout";
import { FaSearch } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar";
const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout style={{ backgroundColor: colors.background }}>
        <Header style={{ backgroundColor: colors.background }} className="flex justify-between">
          <div>
            <Input
              placeholder="Search Here"
              suffix={<FaSearch />}
              className="w-[400px] ps-4 text-sm placeholder:text-accent"
            />
          </div>
          <div className="flex items-center gap-4 text-white">
            <img
              src="https://img.freepik.com/premium-vector/man-profile-pic-avatar-vector_664995-356.jpg"
              className="size-8 rounded-md"
              alt=""
            />
            <Switch style={{ backgroundColor: colors.primary[1] }} />
            <span>Dark Mode</span>
          </div>
        </Header>
        <Content>
          <div className="px-9 py-5">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
