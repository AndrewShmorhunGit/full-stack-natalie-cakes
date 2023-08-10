import request from "supertest";
import { app } from "../app";

describe("Test GET /contents", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/contents");
    expect(response.statusCode).toBe(200);
  });
});
