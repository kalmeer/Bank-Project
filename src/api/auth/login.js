import instance from ".";

const getusername = async () =>
  await instance.post("/mini-project/api/auth/register");

export { getPassword, getusername };

// const data = [
//   {
//     id: 1,
//     name: "",
//     username: "",
//     password: "",
//     image: "",
//   },
//   {
//     id: 2,
//     name: "",
//     username: "",
//     password: "",
//     image: "",
//   },
//   {
//     id: 3,
//     name: "",
//     username: "",
//     password: "",
//     image: "",
//   },
//   {
//     id: 4,
//     nname: "",
//     username: "",
//     password: "",
//     image: "",
//   },
//   {
//     id: 5,
//     name: "",
//     username: "",
//     password: "",
//     image: "",
//   },
//   {
//     id: 6,
//     name: "George",
//     type: "Rabbit",

//     image: "https://i.ibb.co/drbJRPQ/918f1b2c568be3d77a7c29d682be874c-1.png",
// //   },
// // ];

// export default data;
