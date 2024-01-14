import instance from ".";

export const register = async (userInfo) =>
  await instance.post("mini-project/api/auth/register", userInfo);

export default register;
