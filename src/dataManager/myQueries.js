
import myAxios from "./myAxios";

// login
export const $signUp = async (form) => {
  return await myAxios.post(`/user/signup`, form);
};
export const $login = async (form) => {
  return await myAxios.post(`/user/login`, form);
};
export const $kakaoLogin = async (code) => {
  return await myAxios.get(`/user/login/kakao?code=${code}`);
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
  console.log('dispenser',dispenser);
  const data = await myAxios.post(`/post`, dispenser);
  console.log("response data", data);
  return data
};
export const $updatePost = async (postId,form) => {
  console.log('dispenser',form);
  const data = await myAxios.put(`/post/${postId}`, form);
  console.log("response data", data);
  return data
};

