import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://https://my-json-server.typicode.com/typicode/demo/profile"
  });
}
