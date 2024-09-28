import { colors } from "@/constants/theme";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AntDesignThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.secondary[0],
          colorBgBase: colors.accent,
        },
        components: {
          Input: {
            colorTextPlaceholder: "#ffffffff",
          },
          Table: {
            headerColor: "#fff",
            borderColor: "#d9d9d9",
          },
          Checkbox: {
            colorPrimary: "#fff",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntDesignThemeProvider;
