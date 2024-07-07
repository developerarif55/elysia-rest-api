import { postsToCreate } from "./db";

// getting all posts

export async function getPosts() {
  try {
    return await postsToCreate;
  } catch (e: unknown) {
    console.error(`Error getting posts ${e}`);
  }
}
export async function getPost(id: Number) {
  try {
    const item = postsToCreate.find((i) => i.id === id);
    return item;
  } catch (e: unknown) {
    console.error(`Error getting posts ${e}`);
  }
}
