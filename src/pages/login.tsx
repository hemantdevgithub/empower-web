import { LoginForm } from "@/components/forms/login-form";
import React from "react";
import { Divider, Typography } from "antd";
import InvertedRadius from "@/components/ui/inverted-radius";
const LoginPage: React.FC = () => {
  const { Text } = Typography;

  return (
    <div className="flex min-h-screen items-center justify-between gap-6 bg-background p-6">
      <div className="m-[66px] w-[45%]">
        <h3 className="text-4xl font-semibold text-white">Get Started</h3>
        <Text style={{ color: "#999", marginBottom: "24px", display: "block" }}>
          Welcome to Empowerrise - Let's create your account
        </Text>
        <Divider orientation="center" style={{ borderColor: "white" }} />
        <LoginForm />
      </div>

      {/* right side  */}
      <div
        className="min-h-full w-full"
        style={{
          backgroundImage: `url("/images/login-page.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "77px",
          borderRadius: "20px",
        }}
      >
        {" "}
        <div className="mb-12">
          <h1 className="text-left font-dancing text-[60px] font-normal leading-[65.34px] text-white">
            Enter <br /> the Future
          </h1>
          <h1 className="flex justify-center pr-20 text-left text-[35px] font-normal leading-[65.34px] text-white">
            of Investments,
            <br /> today
          </h1>
        </div>
        <InvertedRadius />
      </div>
    </div>
  );
};

export default LoginPage;
