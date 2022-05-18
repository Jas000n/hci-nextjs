import "../styles/globals.css";
import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";
// import "antd/dist/antd.compact.css";
//
// import "antd/dist/antd.variable.min.css";

import { ConfigProvider } from "antd";
import { CountContextProvider } from "../context/CountContext";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

// <ConfigProvider>
// <CountContextProvider>
{
}
// <Component {...pageProps} />
{
}
// </CountContextProvider>
// </ConfigProvider>
