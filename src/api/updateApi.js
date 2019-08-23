import { BACKEND_URL } from "../constants";

const updateApi = async ({ route, action = '', params = [], token = '', data = {} }) => {
    console.log(data);
    const paramsUrl = params.join('/');
    const res = await fetch(BACKEND_URL + route + action + paramsUrl, {
        method: "PUT",
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

export default updateApi;
