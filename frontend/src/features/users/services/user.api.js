import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/users",
  withCredentials: true,
});

export async function getUsers() {
  const response = await api.get("/");
  return response.data;
}

export async function followUser(userId) {
  const response = await api.post(`/follow/${userId}`);
  return response.data;
}

export async function unfollowUser(userId) {
  const response = await api.post(`/unfollow/${userId}`);
  return response.data;
}
