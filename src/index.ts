import { Elysia } from "elysia";
new Elysia()
  .get("/", () => "hi")
  .post("/hello", () => "hello world")
  .listen(3000);
