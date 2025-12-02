import test from "node:test";
import assert from "node:assert/strict";
import { suma } from "../src/app.js";

test("debe sumar 2 + 3 = 5", () => {
  assert.equal(suma(2, 3), 5);
});
