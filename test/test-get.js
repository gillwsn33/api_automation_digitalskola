const assert = require("chai").assert;
var chai = require("chai");
chai.use(require("chai-json-schema"));
const request = require("supertest");
const BASE_URL = "https://reqres.in/api/";
const fs = require("fs");

describe("API Test for 'reqres.in'", () => {
  it("Test - GET All Object", async () => {
    const response = await request(BASE_URL).get("users?page=2");

    const schemaPath = "resources/get-object-schema.json";
    const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));

    console.log(response.body);
    assert.jsonSchema(response.body, jsonSchema);
  });
});
