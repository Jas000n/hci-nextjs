import axios from "axios";
const isServer = typeof window === "undefined";
export default async function getLoginUser() {
  try {
    const res = isServer
      ? await axios.get("http://127.0.0.1:8081")
      : await axios.get("/api/auth/loginuser");
    return res.data;
  } catch (error) {
    // console.error(error);
    console.log("getLoginUser error");
  }
}
