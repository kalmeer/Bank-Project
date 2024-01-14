import instance from ".";

export const register = async (userInfo) =>
  await instance.post("mini-project/api/auth/register", userInfo);

//export const register = (user) => console.log(user);

export default register;
