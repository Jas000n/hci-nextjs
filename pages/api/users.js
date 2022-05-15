export default function handler(req, res) {
  if (req.method === "POST") {
    const { userName, password } = req.body;
    const matchedAccount = users.find((cur) => {
      if (cur.userName === userName && cur.password === password) {
        return true;
      }
      return false;
    });
    res.status(200).json({
      matchedAccount: matchedAccount,
    });
  }
}

const users = [
  { userName: "test", password: "test", type: "test" },
  { userName: "factory manager", password: "go", type: "factory manager" },
];
