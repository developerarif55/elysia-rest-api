import { swagger } from "@elysiajs/swagger";
// import { Response } from "bun-types/fetch";
import { Elysia, t } from "elysia";
import { getPost, getPosts } from "./handlers";
const app = new Elysia()
  .use(swagger())
  .get("/post", () => getPosts())
  .get("/post/:id", ({ params: { id } }) => getPost(id), {
    params: t.Object({
      id: t.Numeric(),
    }),
  })
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
