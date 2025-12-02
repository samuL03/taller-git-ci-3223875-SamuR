import assert from "node:assert";
import { suma } from "../src/app.js";

describe("suma()", () => {
  it("debe sumar 2 + 3 = 5", () => {
    assert.strictEqual(suma(2, 3), 5);
  });
});
