import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.3.172:9000/api",
});

export default apiClient;
