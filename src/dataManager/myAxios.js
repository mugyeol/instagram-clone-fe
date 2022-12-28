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
myAxios.interceptors.response.use((response) => {
  console.log("AXIOS RESPONSE TERCEPTOR RESPONSE : ", response.headers['authorization']);
  response.headers['authorization'] && localStorage.setItem('jwt',response.headers['authorization'])
  return response.data;
},(error)=>{
  console.log("AXIOS error interceptors : ",error)
  return Promise.reject(error)
});
export default myAxios;
