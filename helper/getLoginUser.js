import axios from "axios";
const isServer = typeof window === "undefined";
export default async function getLoginUser() {
  try {
    const res = isServer
      ? await axios.get("http://127.0.0.1:8081")
      : await axios.get("/api/auth/loginuser");
    console.log(res.data, "res.data");
    return res.data;
  } catch (error) {
    // console.error(error);
    console.log("getLoginUser error,返回测试账户");
    return { userName: "test", password: "test", type: "test" };
  }
}
