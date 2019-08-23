import { BACKEND_URL } from "../constants";

const deleteApi = async ({ route, action = '', params = [], token = '' }) => {
  const paramsUrl = params.join('/');
  const res = await fetch(BACKEND_URL + route + action + paramsUrl, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
  const response = await res.json();
  return response;
};

export default deleteApi;
