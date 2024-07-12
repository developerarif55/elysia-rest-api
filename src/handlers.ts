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

export async function createPost(options: { title: string; content: string }) {
  try {
    const { title, content } = options;
    const newId = Math.max(...postsToCreate.map((post) => post.id)) + 1;
    const newPost = await { id: newId, title: title, content: content };

    postsToCreate.push(newPost);
    console.log(`Created post ${newPost}`);
  } catch (error: unknown) {
    console.error(`Error creating post`);
  }
}

export async function updatePost(
  id: number,
  options: { title?: string; content?: string }
) {
  try {
    const { title, content } = options;
    const item = await postsToCreate.find((post) => post.id === id);

    if (!item) {
      throw new Error(`No post to update`);
    }

    if (title !== undefined) {
      item.title = title;
    }

    if (content !== undefined) {
      item.content = content;
    }
    return item;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error updating post:", error.message);
      throw error; // Re-throw the error after logging it
    } else {
      console.error("Unknown error updating post:", error);
      throw new Error("Unknown error occurred");
    }
  }
}
