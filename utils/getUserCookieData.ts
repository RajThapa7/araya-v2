import { cookies } from "next/headers";

const getUserCookieData = () => {
  const cookie = cookies();

  const token = cookie.get("accessToken")?.value;
  const isLoggedIn = !!token;

  const user = cookie.get("user");
  const userId = JSON.parse(user?.value || "{}")?._id;

  return { token, isLoggedIn, userId };
};

export { getUserCookieData };
