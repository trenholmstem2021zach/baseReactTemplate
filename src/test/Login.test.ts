// test/Login.test.js
import { setupServer } from "msw/lib/node";
import { server } from "../mocks/server";

test("allows user to log in", async () => {
  // Render components, perform requests, receive mocked responses.
  server.listen();
  const data = await fetch("/foo");
  console.log(await data.text());
  console.log("here");
});
