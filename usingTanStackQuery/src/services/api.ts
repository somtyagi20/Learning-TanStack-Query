import axios from "axios";
import { Fruit } from "../types/fruits";

const BASE_URL = "http://localhost:8000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getFruitsApi = async () => {
  return await axiosInstance.get<Fruit[]>("get-fruits");
};

export const getOneFruitApi = async (id: number | null) => {
  return await axiosInstance.get<Fruit>(`get-fruit/?id=${id}`);
};

export const addOneFruit = async (data: Fruit) => {
  return await axiosInstance.post("add-fruit", data);
};
