import * as fn from "./fn/index";
import * as monad from "./monad/index";
import * as pattern from "./pattern/index";
import * as reactive from "./reactive/index";

const jenp = {
  fn,
  monad,
  pattern,
  reactive,
};

if (window) {
  global.jenp = jenp;
  global._j = jenp;
}

export { jenp };
