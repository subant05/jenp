export default function asyncCompose() {
  const args = arguments;
  let count = args.length - 1,
    result;

  return async function (data) {
    let iterator = count;
    if (data) result = data;

    do {
      if (typeof args[iterator] != "function") continue;

      if (
        args[iterator].constructor.prototype[Symbol.toStringTag] ===
        "AsyncFunction"
      )
        result = await args[iterator](result);
      else result = args[iterator](result);
    } while (--iterator >= 0);

    return result;
  };
}
