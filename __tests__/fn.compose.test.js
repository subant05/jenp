import { compose } from "../src/fn/index";
import "regenerator-runtime/runtime";

test("Testing: fn.compose()", () => {
  expect(
    compose(
      (function (statement) {
        return function (c) {
          return statement + (c * 2).toString();
        };
      })("Count is: "),
      function (b) {
        return b + b;
      },
      () => 1
    )()
  ).toBe("Count is: 4");
});
