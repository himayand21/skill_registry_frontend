import { MANAGER_ID, MANAGER_FLAG, EMAIL, NAME, PASSWORD } from "../constants";

const checkFormDataValidity = ({ formData }) => {
  const emailFormat = /^\w+([\.-]?\w+)*@wipro.com/;
  const nameFormat = /^[a-zA-Z\s]*$/;

  if (!formData[NAME].match(nameFormat))
    return { isValid: false, message: "Please enter valid name" };

  if (!formData[EMAIL].match(emailFormat))
    return { isValid: false, message: "Please enter valid wipro email" };

  if (formData[PASSWORD].length < 8)
    return {
      isValid: false,
      message: "Password should contain atleast 8 characters"
    };

  if (formData[MANAGER_FLAG] === false && !formData[MANAGER_ID])
    return { isValid: false, message: "Please select approving manager" };

  return { isValid: true, message: "" };
};

export default checkFormDataValidity;
