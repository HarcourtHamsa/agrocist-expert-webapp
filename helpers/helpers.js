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

helpers.saveUserDetailsToLocalStorage = (obj) => {
  localStorage.setItem("user", JSON.stringify(obj));
};

helpers.getUserDetailsFromLocalStorage = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return user;
};

helpers.logout = () => {
  localStorage.removeItem("user");
};

helpers.getProfileDetails = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application-json",
    },
  };

  try {
    const res = axios
      .get(
        `https://agrocist-api-dev.herokuapp.com/api/v1/expert/profile-details`,
        config
      )
      .then(({ data }) => data)
      .catch((err) => console.log(err));

    return res;
  } catch (error) {
    console.log(error);
  }
};

export default helpers;
