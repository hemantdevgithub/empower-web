import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import AntDesignThemeProvider from "./components/providers/antd-theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AntDesignThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
        </PersistGate>
        <RouterProvider router={router} />
      </Provider>
    </AntDesignThemeProvider>
  </React.StrictMode>
);
