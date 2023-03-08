import { asyncCompose } from "../src/fn/index";

test("Testing: fn.asyncCompose()", async () => {
  const result = await asyncCompose(
    (function (statement) {
      return function (c) {
        return statement + (c * 2).toString();
      };
    })("Count is: "),
    function (b) {
      return b + b;
    },
    () => 1
  )();
  console.log(result);
  expect(result).toBe("Count is: 4");
});
