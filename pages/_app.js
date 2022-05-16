import "../styles/globals.css";
import "antd/dist/antd.css";
import { createContext } from "react";
import { CurrentUserProvider } from "../context/CurrentUserContext";
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <CurrentUserProvider>
      <Component {...pageProps} />
    </CurrentUserProvider>
  );
}
