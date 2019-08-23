import { BACKEND_URL } from "../constants";

const postApi = async ({route, action = '', data, params = [], token = ''}) => {
  const paramsUrl = params.join('/');
  const res = await fetch(BACKEND_URL + route + action + paramsUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
    const response = await res.json();
    return response;
};

export default postApi;
