// pages/api/login.ts

export default withIronSessionApiRoute();
//   async function loginRoute(req, res) {
//     // get user from database then:
//     req.session.user = {
//       id: 230,
//       admin: true,
//     };
//     await req.session.save();
//     res.send({ ok: true });
//   },
//   {
//     cookieName: "myapp_cookiename",
//     password: "complex_password_at_least_32_characters_long",
//     // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
//     cookieOptions: {
//       secure: process.env.NODE_ENV === "production",
//     },
//   }
// const users = [
// 	{ userName: "test", password: "test", type: "test" },
// 	{ userName: "jxslb", password: "123456", type: "agency_boss" },
// 	{ userName: "jxsyg", password: "123456", type: "agency_employee" },
// 	{ userName: "gtsh", password: "123456", type: "businessman" },
// 	{ userName: "sccs", password: "123456", type: "manufacturer" },
// 	{ userName: "factory manager", password: "go", type: "factory_manager" },
//   ];
