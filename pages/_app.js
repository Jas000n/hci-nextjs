import "../styles/globals.css";
import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";
// import "antd/dist/antd.compact.css";
import { createContext } from "react";
import { CurrentUserProvider } from "../context/CurrentUserContext";
//
// import "antd/dist/antd.variable.min.css";

import { ConfigProvider } from "antd";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    // <ConfigProvider>
    <CurrentUserProvider>
      <Component {...pageProps} />
    </CurrentUserProvider>
    // </ConfigProvider>
  );
}
