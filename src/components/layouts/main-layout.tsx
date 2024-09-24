import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./side-bar";
const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={() => console.log("Logged Out")}>Logout</Button>{" "}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
