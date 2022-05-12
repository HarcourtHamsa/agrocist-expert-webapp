import axios from "axios";

const helpers = {};

helpers.login = (credentials) => {
  try {
    const authenticate = axios
      .post(
        ` https://agrocist-api-dev.herokuapp.com/api/v1/expert/login`,
        credentials
      )
      .then(({ data }) => data);
    return authenticate;
  } catch (error) {
    return error;
  }
};

helpers.signup = (credentials) => {
  const fullname = `${credentials.firstName} ${credentials.lastName} `;

  const data = {
    ...credentials,
    fullname,
  };

  console.log(data);

  try {
    const authenticate = axios
      .post(
        ` https://agrocist-api-dev.herokuapp.com/api/v1/expert/create-account`,
        data
      )
      .then(({ data }) => data);
    return authenticate;
  } catch (error) {
    return error;
  }
};


helpers.forgot_password = (obj) => {
  const { email, notify } = obj;

  try {
    const res = axios
      .post(
        ` https://agrocist-api-dev.herokuapp.com/api/v1/expert/forgot-password`,
        email
      )
      .then(({ data }) => data)
      .catch((err) => notify("error", "You don't have an account"));

    return res;
  } catch (error) {
    console.log(error);
  }
};

export default helpers;
