import api from "./Api";

export async function getAgua() {
  const res = (await api.get(`/agua/${6}`)).data;
  return res;
}
