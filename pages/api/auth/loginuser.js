import axios from "axios";
export default function handler(req, res) {
  console.log("req of loginuser", req.body);
  if (req.method === "GET") {
    axios
      .get("http://127.0.0.1:8081")
      .then((backend) => {
        console.log(backend.data, "看看express返回的");
        res.status(200).json(backend.data);
      })
      .catch((err) => {
        console.error("后端出现问题");
        res
          .status(200)
          .json({ userName: "test", password: "test", type: "test" });
      });
  }
  if (req.method === "POST") {
    if (req.body.userName === "test" && req.body.password === "test") {
      res
        .status(500)
        .json({ userName: "test", password: "test", type: "test" });
    } else {
      axios
        .post("http://127.0.0.1:8081", req.body)
        .then((backend) => {
          console.log(backend.data, "看看express返回的,e");
          res.status(200).json(backend.data);
        })
        .catch((err) => {
          res.status(500).json({ error: "后端出现问题" });
          console.error("后端出现问题");
        });
    }
  }
}
