import axiosClient from "./config";

export interface IReceivedPosts {
  body: string;
  id: number;
  title: string;
  userId: number;
  key?: number;
}

export async function retrievePosts() {
  return await axiosClient.get("/posts");
}
