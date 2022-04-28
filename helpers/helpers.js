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

export default helpers;
