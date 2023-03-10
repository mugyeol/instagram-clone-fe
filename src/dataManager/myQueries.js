import myAxios from "./myAxios";

// login
export const $signUp = async (form) => {
  return await myAxios.post(`/api/member/signup`, form);
};
export const $login = async (form) => {
  return await myAxios.post(`/api/member/login`, form);
};
export const $kakaoLogin = async (code) => {
  return await myAxios.get(`/api/member/login/kakao?code=${code}`);
};

export const $addPost = async (form) => {
  return await myAxios.post("/api/posting", form);
};

//data request
export const $deletePost = async (postId) => {
  return await myAxios.delete(`/post/${postId}`);
};

//token
export const $removeToken = () => {
  return localStorage.removeItem("jwt");
};
export const $getToken = () => {
  return localStorage.getItem("jwt");
};
export const $uploadPost = async (dispenser) => {
  const data = await myAxios.post(`/post`, dispenser);
  return data;
};
export const $updatePost = async (postId, form) => {
  const data = await myAxios.put(`/post/${postId}`, form);
  return data;
};
