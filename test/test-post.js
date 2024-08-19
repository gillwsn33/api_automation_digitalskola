const assert = require("chai").assert;
var chai = require("chai");
chai.use(require("chai-json-schema"));
const request = require("supertest");
const BASE_URL = "https://reqres.in/api/";
const fs = require("fs");

describe("API Test for 'reqres.in'", () => {
  it("Test - POST Store Object", async () => {
    const body = {
      name: "morpheus",
      job: "leader",
    };

    const response = await request(BASE_URL).post("users").send(body);
    const schemaPath = "resources/post-object-schema.json";
    const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

    console.log(response.statusCode);
    console.log(response.body);
    assert.jsonSchema(response.body, jsonSchema);
  });
});
