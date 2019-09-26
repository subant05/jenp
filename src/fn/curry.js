export default function curry (fn, args = []) {
    if (args.length === fn.length) 
        return fn.apply(null, args);

    return function partial () {
      return curry(fn, args.concat.apply(args, arguments));
    }
  }