import { BACKEND_URL } from "../constants";

const getApi = async ({ route, action = '', params = [], token = '' }) => {
  const paramsUrl = params.join('/');
  const res = await fetch(BACKEND_URL + route + action + paramsUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
  const response = await res.json();
  return response;
};

export default getApi;
