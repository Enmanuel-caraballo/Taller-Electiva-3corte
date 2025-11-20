import { sum } from "../src/sum";

test("suma correcta", () => {
  expect(sum(1, 2)).toBe(3);
});