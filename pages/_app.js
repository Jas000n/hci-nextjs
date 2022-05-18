import "../styles/globals.css";
// import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";
// import "antd/dist/antd.compact.css";
//
import "antd/dist/antd.variable.min.css";
import "/styles/theme/custom-default.css";
import "/styles/theme/custom-dark.css";

import { ConfigProvider } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "antd";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  // const [prefix, setPrefix] = useState("custom-default");
  // const handleSwitchTheme = () => {
  //   prefix === "custom-default"
  //     ? setPrefix("custom-dark")
  //     : setPrefix("custom-default");
  // };
  return getLayout(
    // <ConfigProvider prefixCls={prefix}>
    // <div className={prefix}>
    // <Button onClick={handleSwitchTheme}>switch</Button>
    // {/* <ConfigProvider> */}
    <Component {...pageProps} />
    // </div>
    // </ConfigProvider>
  );
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
