import { colors } from "@/constants/theme";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AntDesignThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary[0],
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntDesignThemeProvider;
