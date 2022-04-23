import { useQuery } from "react-query";
import axios from "axios";

const helpers = {};

helpers.login = (credentials) => {
  const authenticate = axios
    .get(` https://agrocist-api-dev.herokuapp.com/api/v1/expert/login`, credentials)
    .then(({ data }) => data);

  const { isLoading, isError, data, error } = useQuery("login", authenticate);

  if (data) {
    return data;
  }

  if (error) {
    return error;
  }
};

export default helpers;
