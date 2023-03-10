import axios from "axios";
import { serverUrl } from "./apiVariables";

const myAxios = axios.create({ baseURL: serverUrl });

myAxios.interceptors.request.use((config) => {
  if (config === undefined) return;
  const token = localStorage.getItem("jwt");
  config.headers["Authorization"] = token;
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});
myAxios.interceptors.response.use(
  (response) => {
    console.log("AXIOS RESPONSE TERCEPTOR RESPONSE : ", response);
    response.headers["authorization"] &&
      localStorage.setItem("jwt", response.headers["authorization"]);
    return response.data;
  },
  (error) => {
    const status = error.response.status;
    if(status === 403) return console.log('세션 만료.');
    if(status===401) return console.log('토큰이 유효하지 않습니다.')
    if(status===404) return console.log('유저정보 혹은 게시물이 없습니다.  ')
    if(status===400) return console.log('유저정보 혹은 게시물이 없습니다.  ')
    if(status===405) return console.log('잘못된 요청')
    
    return Promise.reject(error);
  }
);
export default myAxios;
