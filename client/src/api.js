import axios from "axios";

const baseURL = import.meta.env.PROD
  ? "/api/v1"
  : "http://localhost:3000/api/v1";

export const api = axios.create({ baseURL });
