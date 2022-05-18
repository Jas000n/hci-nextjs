import axios from "axios";

const fs = require("fs");
export default function handler(req, res) {
  if (req.method === "POST") {
    const { userName, password } = req.body;
    const matchedAccount = users.find((cur) => {
      if (cur.userName === userName && cur.password === password) {
        // const content = {
        //   userName: "jxslb",
        //   password: "123456",
        //   type: "agency_boss",
        // };
        // fs.writeFile("/database/test.json", content, (err) => {
        // fs.writeFile("/database/currentUser.json", content, (err) => {
        //   if (err) {
        //     console.error(err);
        //   }
        //   console.log("文件写入成功");
        // });
        // fs.readFile("/public/currentUser.json", content, (err, data) => {
        //   if (err) {
        //     console.error(err);
        //   }
        //   console.log("文件读取成功", data);
        // });
        return true;
      }
      return false;
    });
    if (matchedAccount !== undefined) {
      axios.post("http://127.0.0.1:8081", matchedAccount).then((res) => {
        console.log(res.data);
      });
    }
    res.status(200).json({
      matchedAccount: matchedAccount,
    });
  }
}

const users = [
  { userName: "test", password: "test", type: "test" },
  { userName: "jxslb", password: "123456", type: "agency_boss" },
  { userName: "jxsyg", password: "123456", type: "agency_employee" },
  { userName: "gtsh", password: "123456", type: "businessman" },
  { userName: "sccs", password: "123456", type: "manufacturer" },
  { userName: "factory manager", password: "go", type: "factory_manager" },
];
