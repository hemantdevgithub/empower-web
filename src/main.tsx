import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
      </PersistGate>
      {/* <RouterProvider router={} /> */}
      <div className="bg-gradient_blue">hello world</div>
    </Provider>
  </React.StrictMode>
);
